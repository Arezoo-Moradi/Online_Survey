from django.contrib.auth.mixins import AccessMixin
from django.shortcuts import redirect, render

# Only superusers, managers
class AdminAccessMixin(AccessMixin):
    def dispatch(self, request, *args, **kwargs):
        user = request.user
        if not (user.is_superuser or user.is_manager):
            return render(request, 'error_pages/page_403.html',status=403)
        return super().dispatch(request, *args, **kwargs)



# Only superusers, managers and users who are members of the organization that has access to the report.
class DashboardAccessMixin(AccessMixin):
    def dispatch(self, request, *args, **kwargs):
        user = request.user
        if not (user.is_superuser or user.is_manager):
            if user.is_active:
                if request.path not in user.dashboards.values_list('path', flat=True):
                        return render(request, 'error_pages/page_403.html',status=403)
            else:
                return render(request, 'error_pages/page_403.html',status=403)
        return super().dispatch(request, *args, **kwargs)


class UserVerificationMixin(AccessMixin):
    def dispatch(self, request, *args, **kwargs):
        user = request.user
        if not (user.is_superuser or user.is_manager) and not user.verified_email:
            return redirect('accounts:verification')

        return super().dispatch(request, *args, **kwargs)