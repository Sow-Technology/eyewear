from django.db import models
from home.models import Product
# Create your models here.
class orders(models.Model):
    username=models.CharField(max_length=255)
    order_id=models.CharField(max_length=255)
    product=models.ForeignKey(Product,on_delete=models.SET_NULL,related_name='products',null=True)
    quantity=models.IntegerField()
    status=models.CharField(max_length=255)

    def __str__(self):
        state=f'Username is:{self.username}'
        print(state)
        return self.username
