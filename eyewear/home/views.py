from django.utils import timezone
from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
# Create your views here.


def home(request):
    return HttpResponse("kndbfkwbfkbekhe")



@api_view(['GET'])
@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        
        # Convert product instances to a list of dictionaries
        product_list = []
        for product in products:
            product_list.append({
                'product_name': product.product_name,
                'slug': product.slug,
                'category': product.category.category_name,  
                'price': product.price,
                'product_description': product.product_desription,
                'color_variant': list(product.color_variant.values_list('color_name', flat=True)),  
                'size_variant': list(product.size_variant.values_list('size_name', flat=True)),  
                'created_at': product.created_at.isoformat(),
                'updated_at': product.updated_at.isoformat(),
            })
        
        return JsonResponse(product_list, safe=False, status=status.HTTP_200_OK)
    
    return JsonResponse({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED) 


@api_view(['GET'])
@csrf_exempt

def set_last_activity(request):
    request.session['last_activity'] =str(timezone.now())
    return HttpResponse("Updated last activity")

