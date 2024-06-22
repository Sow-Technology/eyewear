from django.shortcuts import render
from django.http  import JsonResponse,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from home.models import *
from cart.models import *
from .models import *
@api_view(['GET'])
@csrf_exempt
def show_address(request):
   if request.method=='GET':
    username=request.session.get('username')
    add=Address.objects.filter(username=username)
    addresses=[]
    for a in add:
        addresses.append(
            {'address':a.address}
        )
    return JsonResponse(addresses,status=200)

@api_view(['POST'])
@csrf_exempt
def select_address(request):
   if request.method=='POST':
    add=request.data.get('address')
    request.session['address']=add
    return HttpResponse('success',status=200)
   
def add_address(request):
   if request.method=='POST':
      username=request.session.get('username')
      address=request.data.get('address')
      new_address=Address.objects.create(username=username,address=address)
      new_address.save()
      return HttpResponse('success',status=200)
   

