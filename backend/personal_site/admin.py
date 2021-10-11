from django.contrib import admin

# Register your models here.
class PersonalSiteAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image_link', 'demo_link')