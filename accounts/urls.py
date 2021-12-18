"""Accounts URL Configuration"""

from django.urls import path
from django.contrib.auth.views import LogoutView
from .views import *
from django.views.generic import TemplateView

app_name = 'accounts'

urlpatterns = [
    path('login/', login_view, name="login"),
    path('signup/', SignUpView.as_view(), name="signup"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("password_change/", PasswordChangeView.as_view(), name="password-change"),

    # --------------------------- Verifications -----------------------------
    path("verification/", TemplateView.as_view(template_name="accounts/verification.html"), \
         name="verification"),
    path("verification/email/", EmailVerificationView.as_view(), name="email-verification"),
    path("verification/send_email/", send_email_verification, name="send-email-verification"),

    # --------------------------- Subscription -----------------------------
    path("subscription/", SubscriptionView.as_view(), name="subscription")
]
