from django.urls import path 
from .views import *
urlpatterns=[
    path('add_to_cart/',add_to_cart,name='add_to_cart'),
    path('view_cart/',view_cart,name='view_cart'),
    path('view_all_carts/',view_full_carts,name='view_all_carts')
]