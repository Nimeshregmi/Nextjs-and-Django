from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Category(models.Model):
    name = models.CharField(max_length=255,unique=True)
    slug = models.SlugField(unique=True)
    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=255,unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    price=models.PositiveIntegerField(null=True,blank=True)
    image = models.ImageField(upload_to='product_images/')
    websiteurl=models.URLField(null=True,blank=True)
    added_time=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class UsersInformation(models.Model):
    name=models.CharField(max_length=255)
    skills=models.TextField()
    email=models.EmailField(unique=True)
    phonenumber=PhoneNumberField(blank=True,null=True)
    address=models.TextField(null=True,blank=True)
    facebookLink=models.URLField(null=True,blank=True)
    instagramLink=models.URLField(null=True,blank=True)
    linkedinLink=models.URLField(null=True,blank=True)
    githubLink=models.URLField(null=True,blank=True)
    behanceLink=models.URLField(null=True,blank=True)

    def __str__(self):
        return self.name
