from django.urls import path
from .views import register, login

urlpatterns = [
    path('register', register, name='register'),
    path('login', login, name='login'),
    # path('set',set_session, name='set_session'),
    # path('get', get_session, name='get_session'),
]
