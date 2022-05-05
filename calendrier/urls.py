from django.urls import path 
from . import views
urlpatterns = [
    path('calendrier',views.calendrier,name='calendrier')
]