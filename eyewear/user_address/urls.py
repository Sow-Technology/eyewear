from django.urls import path 
from .models import *
from .views import *
urlpatterns=[
    path('add_address/',add_address,name='add_address'),
    path('select_address/',select_address,name='select_address'),
    path('view_address/',show_address,name='view_address')
]