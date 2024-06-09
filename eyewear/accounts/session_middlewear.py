from django.utils import timezone
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.utils.dateparse import parse_datetime  

class SessionTimeoutMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            last_activity = request.session.get('last_activity')

            if last_activity:
                last_activity_time = parse_datetime(last_activity)
                inactive_time = (timezone.now() - last_activity_time).total_seconds()
                if inactive_time > 20 * 60:  
                    logout(request)
                    return redirect('login')  

            request.session['last_activity'] = str(timezone.now())

        response = self.get_response(request)
        return response
