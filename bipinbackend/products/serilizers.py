from rest_framework import serializers
from .models import Product,UsersInformation,Category # Import your models here
from phonenumber_field.serializerfields import PhoneNumberField

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'description', 'price', 'image', 'websiteurl', 'added_time']

class UsersInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersInformation
        fields = '__all__'
