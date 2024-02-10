from django.urls import path
from .views import *

urlpatterns = [
    path('', UserInfoList.as_view()),
    # path('', UserInfoCreate.as_view()),
    # path('<int:pk>',UserInfoRetrieveUpdateDestroy.as_view()),
    path('product/',ProductList.as_view())
    
]