from django.urls import path
from .views import register, login, x

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('x/', x, name='x'),

]
