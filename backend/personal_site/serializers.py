from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'order', 'short_description', 
        'long_description', 'image_one_link', 'image_two_link',
        'image_three_link','demo_link')