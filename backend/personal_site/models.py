from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=120)
    order = models.IntegerField()
    short_description = models.CharField(max_length=240)
    long_descrption = models.TextField()
    image_one_link =  models.TextField()
    image_two_link = models.TextField()
    image_three_link = models.TextField()
    demo_link = models.TextField()
    
class BlogPost(models.Model):
   title = models.CharField(max_length=120)
   last_modified = models.DateTimeField(auto_now=True)
   summary_text = models.TextField()
   image_link = models.TextField()
   blog_entry = models.TextField()