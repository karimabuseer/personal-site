from rest_framework import serializers
from .models import Project, BlogPost

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'order', 'short_description', 
        'long_description', 'image_one_link', 'image_two_link',
        'image_three_link','demo_link')

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'last_modified', 'summary_text', 
        'image_link', 'blog_entry')