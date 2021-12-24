from survey.forms import *
from survey.models import Answer, Category, Question, Survey
from django.forms import inlineformset_factory  # new


class SurveyForm(models.ModelForm):  # new
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
