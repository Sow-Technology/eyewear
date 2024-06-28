from django.db import models

# Create your models here.
class Otp(models.Model):
    username=models.CharField(max_length=255)
    otp=models.IntegerField()
    status=models.CharField(max_length=255)

    def __str__(self)->str:
        return self.status
    

