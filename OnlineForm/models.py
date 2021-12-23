from django.db import models
from SampleForms.models import *


# Create your models here.


# class OnlineForm(models.Model):
#     name = models.CharField(verbose_name='نام پرسشنامه', max_length=200)
#     user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
#     open_question = models.ManyToManyField(OpenQuestion)
#     drop_down_question = models.ManyToManyField(DropDownQuestion)
#     checkbox = models.ManyToManyField(CheckBox)
#     radio_button = models.ManyToManyField(RadioButton)
