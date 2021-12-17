from django.http.response import HttpResponseRedirect
from django.shortcuts import render, redirect
import jdatetime
from .forms import LoginForm, UserRegisterForm
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.views import generic
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from .mixins import *
from .models import *
from django.contrib.auth.views import PasswordChangeView
from jdatetime import datetime, timedelta
from random import randint
from django.core.mail import EmailMessage
from django.template.loader import get_template
from django.contrib.auth.decorators import login_required
from dashboards.models import *
from pricing_project.settings import PRICING_DB

# ------------------------------ SignUp View ------------------------------
class SignUpView(SuccessMessageMixin, generic.CreateView):
    template_name = 'accounts/signup.html'
    success_url = '/'
    form_class = UserRegisterForm
    success_message = "ثبت‌نام شما با موفقیت انجام گردید."

    def form_valid(self, form):
        super().form_valid(form)
        username = form.cleaned_data['username']
        password = form.cleaned_data['password1']
        user = authenticate(username=username, password=password)
        login(self.request, user)
        send_email_verification(self.request)
        return HttpResponseRedirect("/")
        


# --------------------------- Verifications -----------------------------
class EmailVerificationView(LoginRequiredMixin, generic.TemplateView):
    template_name = "accounts/email_verification.html"

    def post(self, request, *args, **kwargs):
        email_verify_code = int(request.POST.get("email_verify_code", None))
        if email_verify_code:
            user = request.user
            verify_code = user.codes.filter(type="email").first()
            verify_code.attempts += 1
            verify_code.save()
            if not verify_code.is_active:
                messages.warning(request, "کد تایید منقضی شده است!")
            elif email_verify_code != verify_code.code:
                messages.error(request, "کد تایید صحیح نمی‌باشد!")
            
            if email_verify_code == verify_code.code:
                verify_code.is_used = True
                user.verified_email = True
                verify_code.save()
                user.save()
                messages.success(request, "ایمیل شما با موفقیت تایید گردید.")
                return redirect("accounts:subscription")
            return redirect("accounts:email-verification")

        else:
            messages.error(request, "کد تایید را وارد نمایید") 
            return redirect("accounts:email-verification")

@login_required()
def send_email_verification(request):
    user = request.user
    if user.verified_email:
        messages.warning(request, "پست الکترونیکی شما تایید شده است.")
        return redirect("/")

    date_from = datetime.today() - timedelta(days=1)
    if VerifyCode.objects.filter(user=user, type="email", created_at__gte=date_from).count() > 4:
        messages.error(request, "حداکثر تعداد مجاز ارسال کد در یک روز استفاده شده است!")
        return redirect("accounts:email-verification")
    else:
        vc = VerifyCode.objects.create(user=user, type="email", code=randint(100000,999999))

        data = {
            "user": user.get_full_name(),
            "code": vc.code,
        }  
        email_template = "accounts/email_verification_text.html"
        email_message = get_template(email_template).render(data)
        try:
            msg = EmailMessage(
                    f"تایید پست الکترونیکی",
                    email_message,
                    'پنل قیمت‌گذاری هوشمند <example@example.com>',
                    [user.email]
            )
            msg.send()
            print("sent !!!!!!!!!!")
            
            messages.success(request, "کد تایید با موفقیت ارسال گردید.")
            return redirect("accounts:email-verification")
            
        except:
            messages.error(request, "مشکلی در ارسال ایمیل پیش آمده!")
            return redirect("accounts:email-verification")


# --------------------------- Subscription -----------------------------
class SubscriptionView(LoginRequiredMixin, UserVerificationMixin, generic.TemplateView):
    template_name = "accounts/subscription.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["all_productgroups"] = Pricingreport.objects.using(PRICING_DB).\
            values_list('productgroup', flat=True).order_by('productgroup').distinct()
        context["all_dashboards"] = Dashboard.objects.all()
        context["user_dashboards"] = self.request.user.dashboards.all()
        if self.request.user.product_groups:
            context["user_productgroups"] = (self.request.user.product_groups).split(" , ")
        return context

    def post(self, request):
        user = request.user
        productgroups_input = dict(request.POST).get('productgroup', [])
        dashboards_input = dict(request.POST).get('dashboard', [])

        if not productgroups_input:
            messages.error(request, "حداقل یک گروه محصول انتخاب نمایید!")
        if not dashboards_input:
            messages.error(request, "حداقل یک داشبورد انتخاب نمایید!")

        dashboards = Dashboard.objects.filter(id__in=dashboards_input)
        product_groups_text = " , ".join(productgroups_input)

        if dashboards and product_groups_text:
            user.dashboards.clear()
            user.dashboards.add(*dashboards)
            user.product_groups = product_groups_text
            user.save()
            messages.success(request, "تغییرات با موفقیت اعمال گردید.")

        return redirect("accounts:subscription")

        


# ------------------------------ Login View ------------------------------
def login_view(request):
    if request.user.is_authenticated:
        return redirect('/')
    form = LoginForm(request.POST or None)
    msg = None
    if 'next' in request.GET:
        request.session['next'] = request.GET['next']

    if request.method == "POST":
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                if 'next' in request.session:
                    return redirect(request.session['next'])
                return redirect("/")
            else:
                msg = 'اطلاعات نامعتبر است!'
        else:
            msg = 'خطا در اعتبار اطلاعات!'

    return render(request, "accounts/login.html", {"form": form, "msg" : msg})



# ------------------------------ Password Change View ------------------------------
class PasswordChangeView(LoginRequiredMixin, SuccessMessageMixin, PasswordChangeView):
    template_name = 'accounts/password_change.html'
    model = User
    success_url = reverse_lazy('accounts:password-change')
    success_message = 'کلمه‌عبور جدید با موفقیت ثبت گردید.'

    def get_form(self, form_class=None):
        form = super().get_form(form_class=form_class)
        form.fields["old_password"].label = 'کلمه عبور فعلی'
        form.fields["new_password1"].label = 'کلمه عبور جدید'
        form.fields["new_password2"].label = 'تایید کلمه عبور جدید'
        form.fields["old_password"].widget.attrs['title'] = ''
        form.fields["new_password1"].widget.attrs['title']  = ''
        form.fields["new_password2"].widget.attrs['title']  = ''
        return form