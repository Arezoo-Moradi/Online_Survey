from django.contrib import admin
from django.contrib import admin
from django.contrib.admin.decorators import register
from django.contrib.auth.admin import UserAdmin as AbstractUserAdmin
from .models import *
from django.contrib.auth.models import Group

# ----------------------------- Unregister Group ---------------------------
admin.site.unregister(Group)


# ----------------------------- Verification ---------------------------------------
@register(VerifyCode)
class VerifyCodeAdmin(admin.ModelAdmin):
    list_display = ('user', 'type', 'code', 'attempts', 'get_created_at', 'is_active', 'is_used')
    list_filter = ('user', 'type', 'created_at', 'is_active', 'is_used')
    search_fields = ('user__username', 'code')


# ----------------------------- User ---------------------------------------
@register(User)
class UserAdmin(AbstractUserAdmin):
    list_display = ['username', 'first_name', 'last_name', 'email', 'phone',
                    'get_date_joined', 'get_last_update', 'created_by', 'is_active', 'is_superuser', 'is_manager',
                    'verified_email']

    list_filter = ['is_active', 'is_superuser',
                   'is_manager', 'created_by']
    search_fields = ['username', 'first_name', 'last_name', 'email']
    readonly_fields = ['get_date_joined',
                       'get_last_update', 'get_last_login', 'created_by']
    list_display_links = ['username']

    fieldsets = (
        ('اطلاعات ورود', {
            'fields': ('username', 'password', 'created_by')
        }),

        ('اطلاعات شخصی', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),

        ('دسترسی‌ها', {
            'fields': (
                'is_active',
                'verified_email',
                'is_staff',
                'is_superuser',
                'is_manager',
                'dashboards',
                'product_groups',
                'user_permissions',
            )
        }),

        ('تاریخ‌های مهم', {'fields': ('get_date_joined',
                                      'get_last_update', 'get_last_login')})
    )

    add_fieldsets = (
        ('اطلاعات ورود', {
            'fields': ('username', 'password1', 'password2')
        }),

        ('اطلاعات شخصی', {
            'fields': ('first_name', 'last_name', 'email', 'phone')
        }),

        ('دسترسی‌ها', {
            'fields': (
                'is_active',
                'verified_email',
                'is_staff',
                'is_superuser',
                'is_manager',
                'dashboards',
                'product_groups',
                'user_permissions',
            )
        })
    )
