from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    myDict = {'insert_me': 'This is home page of our database'}
    return render(request, 'home/index.html', context=myDict)
