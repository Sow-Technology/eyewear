from home.models import *
from .models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
@api_view(['POST'])
@csrf_exempt
def add_to_cart(request):
    if request.method=="POST":
        product_name=request.data.get('product_name')
        color_variant=request.data.get('color_variant')
        size_variant=request.data.get('size_variant')
        user_name=request.session.get('username')
        quantity=request.data.get('quantity')
        product=Product.objects.filter(product_name=product_name)[0]
       
        cart=Cart.objects.create(username=user_name,product=product,quantity=quantity)
        cart.save()
        cart=Cart.objects.all()
        cart_items=[]
        for c in cart:
            cart_items.append(
                {
                    "username":c.username,
                    "product_name":c.product.product_name,
                    "slug":c.product.slug,
                    "category":c.product.category.category_name,
                    "price":c.product.price,
                    "quantity":c.quantity,

                }
            )
        print(cart_items)
        return Response(cart_items, status=200)