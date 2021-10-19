from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectSerializer, BlogPostSerializer
from .models import Project, BlogPost

# Create your views here.
class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    