from django.shortcuts import render

# Create your views here.

def calendrier(request):
    return render(request,'calendrier/calendrier.html')