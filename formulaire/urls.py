from django.urls import path
from . import views
urlpatterns = [
    path('formulaire',views.formulaire,name='formulaire')
]