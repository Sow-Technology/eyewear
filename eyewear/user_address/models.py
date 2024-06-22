from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
class Address(models.Model):
    username=models.CharField(max_length=255)
    address=models.TextField()

    def __str__(self)->str:
        return self.address
    
