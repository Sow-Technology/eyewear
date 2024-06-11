from django.db import models
from home.models import *
# Create your models here.
class Cart(models.Model):
    username=models.CharField(max_length=255)
    product=models.ForeignKey(Product,on_delete=models.SET_NULL,null=True,related_name='product')
    quantity=models.IntegerField()
    def __str__(self)->str:
      return self.username