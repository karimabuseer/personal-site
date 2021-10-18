from django.contrib import admin
from .models import Project, BlogPost

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'short_description', 'long_description',
     'image_one_link', 'image_two_link', 'image_three_link', 'demo_link')

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'last_modified', 'summary_text', 'image_link', 
    'blog_entry')
# Register your models here.

admin.site.register(Project, ProjectAdmin)
admin.site.register(BlogPost, BlogPostAdmin)