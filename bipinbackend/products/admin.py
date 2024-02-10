from django.contrib import admin
from .models import *
# Register your models here.
class ProductModelAdmin(admin.ModelAdmin):
    list_display=('name','id')
admin.site.register(Product,ProductModelAdmin)

class CategoryModelAdmin(admin.ModelAdmin):
    list_display=('name','id')
admin.site.register(Category,CategoryModelAdmin)

class UserInfoModelAdmin(admin.ModelAdmin):
    list_display=('name','email','id')
admin.site.register(UsersInformation,UserInfoModelAdmin)