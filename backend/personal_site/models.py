from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image_link =  models.TextField()
    demo_link = models.TextField()
    
