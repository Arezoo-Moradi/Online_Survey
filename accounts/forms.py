from django import forms
from django.contrib.auth.forms import UserCreationForm
from accounts.models import User


class UserRegisterForm(UserCreationForm):
  email = forms.EmailField()

  def __init__(self, *args, **kwargs):
        super(UserRegisterForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.pop("autofocus", None)
        self.fields['username'].help_text = "<div class='text-right'>شامل حروف انگلیسی، اعداد و علامات</div>"
        self.fields['first_name'].widget.attrs.update(autofocus='autofocus')
        self.fields['first_name'].required = True
        self.fields['last_name'].required = True
        self.fields['password1'].label = "کلمه عبور"
        self.fields['password2'].label = "تکرار کلمه عبور"
        self.fields['email'].label = "پست الکترونیکی"
        self.fields['password1'].help_text = """
        <ul class="pr-3">
        <li class="text-right">کلمه عبور شما نمی‌تواند شبیه سایر اطلاعات شخصی شما باشد.</li>
        <li class="text-right">کلمه عبور شما می‌بایست حداقل از 8 حرف تشکیل شده باشد.</li>
        <li class="text-right">کلمه عبور شما نمی تواند یک کلمه عبور معمول باشد.</li>
        <li class="text-right">کلمه عبور شما نمی تواند کلا عدد باشد.</li>
        </ul>
        """
        self.fields['password2'].help_text = ""

        self.fields['username'].widget.attrs.update(dir='ltr')
        self.fields['email'].widget.attrs.update(dir='ltr')
        self.fields['phone'].widget.attrs.update(dir='ltr')
        self.fields['password1'].widget.attrs.update(dir='ltr')
        self.fields['password2'].widget.attrs.update(dir='ltr')

        for visible in self.visible_fields():
            visible.field.widget.attrs['title'] = ''
  
  class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'email', 'phone', 'password1' ,'password2']
        
    

class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "نام کاربری",
                "class": "form-control text-center",
                "title": "",
                'autofocus': 'autofocus',
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "کلمه عبور",
                "class": "form-control text-center",
                "title": "",
            }
        ))