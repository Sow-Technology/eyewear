from django.urls import path
from .views import RegisterView, LoginView, user_list

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('users', user_list, name="user_list" ),

]
