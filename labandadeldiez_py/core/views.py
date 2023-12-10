from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "core/home.html")

def biografia(request):
    return render(request, "core/biografia.html")

def tienda(request):
    return render(request, "core/tienda.html")

def galeria(request):
    return render(request, "core/galeria.html")

def contacto(request):
    return render(request, "core/contacto.html")