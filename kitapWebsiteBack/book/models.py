from django.db import models


# Create your models here.
class BooksCategory(models.Model):
    name = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'BooksCategory'
        verbose_name_plural = 'BooksCategories'


class Book(models.Model):
    name = models.CharField(max_length=300)
    author = models.TextField(max_length=300)
    image = models.TextField(default='')
    rating = models.FloatField(default=5)
    category = models.ForeignKey(BooksCategory, on_delete=models.CASCADE)