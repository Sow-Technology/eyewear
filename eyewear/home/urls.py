from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="home" ),
    path('products', views.product_list, name="product_list" ),
    path('last_activity', views.set_last_activity, name="last_activity")

]