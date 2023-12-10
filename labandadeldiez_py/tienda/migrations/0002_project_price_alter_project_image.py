# Generated by Django 5.0 on 2023-12-09 05:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("tienda", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="price",
            field=models.CharField(default=12, max_length=10, verbose_name="Precio"),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="project",
            name="image",
            field=models.ImageField(upload_to="productos", verbose_name="Imagen"),
        ),
    ]
