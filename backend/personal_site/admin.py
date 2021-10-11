from django.contrib import admin
from .models import Project

class PersonalSiteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image_link', 'demo_link')
# Register your models here.

admin.site.register(Project, PersonalSiteAdmin)