from django.db import models
# Create your models here.


class OpenQuestion(models.Model):
    text = models.CharField(verbose_name='متن سوال', max_length=1000)
    description = models.TextField(verbose_name='توضیحات')
    is_required = models.BooleanField(verbose_name='مورد نیاز', default=False)


class ItemsDropDown(models.Model):
    title = models.CharField(verbose_name='عنوان', max_length=1000)


class DropDownQuestion(models.Model):
    text = models.CharField(verbose_name='متن سوال', max_length=1000)
    add_item = models.ManyToManyField(ItemsDropDown)


class ItemsCheckBox(models.Model):
    title = models.CharField(verbose_name='عنوان', max_length=1000)


class CheckBox(models.Model):
    text = models.CharField(verbose_name='متن سوال', max_length=1000)
    add_item = models.ManyToManyField(ItemsCheckBox)


class ItemsRadioButton(models.Model):
    title = models.CharField(verbose_name='عنوان', max_length=1000)


class RadioButton(models.Model):
    text = models.CharField(verbose_name='متن سوال', max_length=1000)
    add_item = models.ManyToManyField(ItemsRadioButton)
