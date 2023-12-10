from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name = "Título")
    description = models.TextField(verbose_name = "Descripción")
    image = models.ImageField(verbose_name = "Imagen", upload_to="productos")
    price = models.CharField(max_length=10, verbose_name = "Precio")
    link = models.URLField(verbose_name = "Enlace", null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, verbose_name = "Fecha de creación")
    updated = models.DateTimeField(auto_now=True, verbose_name = "Fecha de modificación")
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "proyecto"
        verbose_name_plural = "proyectos"
        ordering = ["-created"]
