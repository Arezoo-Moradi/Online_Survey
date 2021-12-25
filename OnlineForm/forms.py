from survey.forms import *
from survey.models import Answer, Category, Question, Survey
from django.forms import inlineformset_factory  # new


class SurveyForm(models.ModelForm):  # new
    # def __init__(self, *args, **kwargs):
    #     super(SurveyForm, self).__init__(*args, **kwargs)
    #     # self.fields['name'].widget.attrs.pop("autofocus", None)
    #     self.fields['name'].label = "نام فرم"
    #     self.fields['description'].label = "توضیحات"
    #     # self.fields['first_name'].required = True
    #     # self.fields['last_name'].required = True
    #     self.fields['is_published'].label = "نام خانوادگی"
    #     self.fields['password1'].label = "کلمه عبور"
    #     self.fields['password2'].label = "تکرار کلمه عبور"
    #     self.fields['email'].label = "پست الکترونیکی"
    #     self.fields['password1'].help_text = """
    #       <ul class="pr-3">
    #       <li class="text-right">کلمه عبور شما نمی‌تواند شبیه سایر اطلاعات شخصی شما باشد.</li>
    #       <li class="text-right">کلمه عبور شما می‌بایست حداقل از 8 حرف تشکیل شده باشد.</li>
    #       <li class="text-right">کلمه عبور شما نمی تواند یک کلمه عبور معمول باشد.</li>
    #       <li class="text-right">کلمه عبور شما نمی تواند کلا عدد باشد.</li>
    #       </ul>
    #       """
    #     self.fields['password2'].help_text = ""
    #
    #     self.fields['username'].widget.attrs.update(dir='ltr')
    #     self.fields['email'].widget.attrs.update(dir='ltr')
    #     self.fields['phone'].widget.attrs.update(dir='ltr')
    #     self.fields['password1'].widget.attrs.update(dir='ltr')
    #     self.fields['password2'].widget.attrs.update(dir='ltr')
    #
    #     for visible in self.visible_fields():
    #         visible.field.widget.attrs['title'] = ''
    class Meta:
        model = Survey
        fields = '__all__'


class CategoryForm(models.ModelForm):  # new
    class Meta:
        model = Category
        fields = '__all__'


class QuestionForm(models.ModelForm):  # new
    class Meta:
        model = Question
        fields = '__all__'


class AnswerForm(models.ModelForm):  # new
    class Meta:
        model = Answer
        fields = '__all__'


# new
CategoryMetaInlineFormset = inlineformset_factory(
    Survey,
    Category,
    fields=('name', 'order', 'description'),
    extra=1
)

QuestionMetaInlineFormset = inlineformset_factory(
    Survey,
    Question,
    fields=('text', 'order', 'required', 'type', 'choices'),
    extra=1
)
