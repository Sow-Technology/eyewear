from django.contrib import admin
from .models import *

admin.site.register(Category)
admin.site.register(ColorVariant)
admin.site.register(SizeVariant)

class ProductImageAdmin(admin.StackedInline):
    model =ProductImage

class ProductAdmin(admin.ModelAdmin):
    list_display = ['product_name' , 'price' ]
    inlines = [ProductImageAdmin]

admin.site.register(Product ,ProductAdmin)
admin.site.register(ProductImage)