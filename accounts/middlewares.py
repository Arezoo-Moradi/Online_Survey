class AdminUserMiddleWare(object):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        user = request.user
        if user.is_authenticated:
            if user.is_superuser or user.is_manager:
                request.has_admin_access = True
            else:
                request.has_admin_access = False
                if user.verified_email:
                    request.is_verified = True
                else:
                    request.is_verified = False

        return self.get_response(request)
