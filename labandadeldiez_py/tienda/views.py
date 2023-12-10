from django.shortcuts import render
from .models import Project

def tienda(request):
    projects = Project.objects.all
    return render(request, "tienda/tienda.html", {'projects':projects})

