# middleware.py
from django.utils import timezone
from django.contrib.auth import logout
from django.shortcuts import redirect

class SessionTimeoutMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            # Get the last activity time
            last_activity = request.session.get('last_activity')

            # Check if it's been more than 20 minutes
            if last_activity:
                inactive_time = (timezone.now() - timezone.datetime.strptime(last_activity, "%Y-%m-%d %H:%M:%S.%f")).total_seconds()
                if inactive_time > 20 * 60:  # 20 minutes
                    # Log the user out and redirect to login page
                    logout(request)
                    return redirect('login')  # Adjust 'login' to your login view name

            # Update last activity time
            request.session['last_activity'] = str(timezone.now())

        response = self.get_response(request)
        return response