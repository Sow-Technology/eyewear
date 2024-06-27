import random
import string
import secrets
from django.shortcuts import render
from django.http  import JsonResponse,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from home.models import *
from cart.models import *
from .models import *
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.contrib.auth.models import User
@api_view(['GET'])
@csrf_exempt
def place_order(request):
     if request.method=="GET":
      username=request.session.get('username')
      address=request.session.get('address')
      cart_items=Cart.objects.filter(username=username)
      def generate_random_id(length=10):
        return ''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(length))
      random_id=generate_random_id()
      order_products=[]
      for items in cart_items:
         order_products.append(items.product.product_name)
         product=items.product
         order_id=random_id
         quantity=items.quantity
         new_item=orders.objects.create(username=username,order_id=order_id,product=items.product,quantity=quantity,status="order placed",address=address)
         new_item.save()
         items.delete()
      context={
         "user_name":username,
         "order_id":order_id,
         "product_name":order_products,
         "status":"Order placed, awaiting for dispatch"
      }
      mail=render_to_string('order_placed.html', context)
      subject="Order Placed Successfully"
      from_email="agrawalsiddhi836@gmail.com"
      email_address=User.objects.get(username=username)
      recipient_email=[email_address.email]
      email = EmailMessage(subject, mail, from_email, recipient_email)
      email.content_subtype = 'html'
      email.send()
      return HttpResponse("Order placed successfully")
@api_view(['GET'])
@csrf_exempt
def view_orders(request):
    if request.method=="GET":
       username=request.session.get('username')
       print("Username is : ",username)
       order_items=orders.objects.filter(username=username)
       order_list=[]
       for item in order_items:
        order_list.append({
             'username':item.username,
             'order_id':item.order_id,
             'product name':item.product.product_name,
             'category':item.product.category.category_name,
             'quantity':item.quantity,
             'status':item.status,
          })
       return Response(order_list,status=200)
@api_view(['POST'])
@csrf_exempt
def search_orders(request):
    if request.method=="POST":
       username=request.session.get('username')
       order_id=request.data.get('order_id')
       order_items=orders.objects.filter(username=username,order_id=order_id)
       order_list=[]
       for order in order_items:
          order_list.append({
             'order_id':order.order_id,
             'product':order.product,
             'quantity':order.quantity,
             'status':order.status,
          })
       return JsonResponse(order_list,status=200)
@api_view(['POST'])
@csrf_exempt 
def cancel_orders(request):
   if request.method=="POST":
       username=request.session.get('username')
       order_id=request.data.get('order_id')
       order_items=orders.objects.filter(username=username,order_id=order_id)
       for items in order_items:
          items.delete()
         
       return JsonResponse({"message":"items deleted successfully"},status=200)
@api_view(['POST'])
@csrf_exempt   
def change_order_status(request):
   if request.method=="POST":
      username=request.data.get('username')
      order_id=request.data.get('order_id')
      new_status=request.data.get('new_status')
      order_items=orders.objects.filter(username=username,order_id=order_id)
      for items in order_items:
         items.status=new_status
         items.save()
      
      return HttpResponse("successfully updated order status") 
