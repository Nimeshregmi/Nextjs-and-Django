from .models import *
from .serilizers import *
from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.tokens import AccessToken
# from rest_framework_simplejwt.authentication import JWTAuthentication

class UserInfoList(generics.ListAPIView):
    queryset = UsersInformation.objects.all()
    serializer_class = UsersInformationSerializer
    authentication_classes=[]
    permission_classes = []
# class UserInfoCreate(generics.CreateAPIView):
#     queryset = UsersInformation.objects.all()
#     serializer_class = UsersInformationSerializer
#     authentication_classes=[JWTAuthentication]
#     permission_classes = [IsAuthenticated]

# class UserInfoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     queryset = UsersInformation.objects.all()
#     serializer_class = UsersInformationSerializer
#     authentication_classes=[JWTAuthentication]
#     permission_classes = [IsAuthenticated]
#     lookup_fields = ['pk']
    

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_classes=[]
    permission_classes = []