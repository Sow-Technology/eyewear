from django.urls import path 
from .views import *
urlpatterns=[
    path('place_order/',place_order,name='place_order'),
    path('view_orders/',view_orders,name='view_order'),
    path('search_orders/',search_orders,name='search_order'),
    path('cancel_orders/',cancel_orders,name='cancel_orders'),
    path('change_order_status/',change_order_status,name='change_order_status'),
]