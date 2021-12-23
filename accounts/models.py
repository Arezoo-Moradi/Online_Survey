from django.db import models
from django.db.models.fields.related import ForeignKey
from django.utils.safestring import mark_safe
from django.contrib.auth.models import AbstractUser
from django_jalali.db import models as jmodels
# from dashboards.models import Dashboard
from jdatetime import datetime, timedelta
from django.db.models import Q

#----------------------------- User ---------------------------------------
class User(AbstractUser):
    date_joined = jmodels.jDateTimeField(verbose_name="تاریخ عضویت", auto_now_add=True, null=True)
    last_update = jmodels.jDateTimeField(verbose_name="آخرین بروزرسانی", auto_now=True, null=True)
    last_login = jmodels.jDateTimeField(verbose_name="آخرین ورود", null=True, blank=True)
    is_manager = models.BooleanField(verbose_name="مدیر ارشد", default=False,\
        help_text="مدیر ارشد میتواند سازمان تعریف کند و به تمامی گزارشات و کاربران دسترسی دارد.")
    created_by = models.ForeignKey('User', verbose_name="ایجاد کننده", null=True, blank=True, on_delete=models.SET_NULL)
    
    # dashboards = models.ManyToManyField(Dashboard, blank=True, verbose_name="دسترسی داشبوردها")
    product_groups = models.TextField(verbose_name="دسترسی گروه محصولات", null=True, blank=True)
    phone = models.CharField(verbose_name="تلفن همراه", max_length=11, null=True, help_text="همراه با صفر وارد شود.")

    email = models.EmailField(verbose_name="پست الکترونیکی", unique=True, null=True)

    verified_email = models.BooleanField(verbose_name="ایمیل تایید‌شده", default=False)

    REQUIRED_FIELDS = []

    def get_date_joined(self):
        return self.date_joined.strftime("%H:%M - %Y/%m/%d")
    get_date_joined.short_description = 'تاریخ عضویت'

    def get_date_joined__date_only(self):
        return self.date_joined.strftime("%Y/%m/%d")

    def get_last_update(self):
        return self.last_update.strftime("%H:%M - %Y/%m/%d")
    get_last_update.short_description = 'آخرین بروزرسانی'

    def get_last_login(self):
        if self.last_login:
            return self.last_login.strftime("%H:%M - %Y/%m/%d")
        return "تاکنون وارد سایت نشده است."
    get_last_login.short_description = 'آخرین ورود'

    def __str__(self):
        return "%s - %s" % (self.username, self.get_full_name())

    class Meta:
        verbose_name_plural = '   کاربران'
        verbose_name = 'کاربر'


class VerifyCode(models.Model):
    VERIFY_CODE_CHOICES = [
        ("phone", "تلفن همراه"),
        ("email", "پست الکترونیکی")
    ]

    user = ForeignKey(User, verbose_name="کاربر", on_delete=models.CASCADE, related_name="codes")
    type = models.CharField(verbose_name="نوع", max_length=10, choices=VERIFY_CODE_CHOICES)
    created_at = jmodels.jDateTimeField(verbose_name="تاریخ ایجاد", auto_now_add=True)
    is_active = models.BooleanField(verbose_name="فعال", default=True)
    attempts = models.PositiveSmallIntegerField(verbose_name="تلاش‌ها", default=0)
    code = models.PositiveSmallIntegerField(verbose_name="کد")
    is_used = models.BooleanField(verbose_name="استفاده‌شده", default=False)

    class Meta:
        verbose_name = "کد احراز"
        verbose_name_plural = "کدهای احراز"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.code} - {self.user.username} - {self.type}"


    def save(self, *args, **kwargs):
        if self.pk:
            now = datetime.now()
            created_minutes = (now - self.created_at).seconds / 60
            if self.attempts > 5 or created_minutes > 5 or self.is_used:
                self.is_active = False
                self.user.codes.filter(Q(type=self.type) & Q(is_active=True)).update(is_active=False)
        super(VerifyCode, self).save(*args, **kwargs)


    def get_created_at(self):
        return self.created_at.strftime("%H:%M - %Y/%m/%d")
    get_created_at.short_description = 'تاریخ ایجاد'