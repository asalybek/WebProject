from django.contrib import admin

# Register your models here.
from book.models import BooksCategory, Book

admin.site.register(BooksCategory)
admin.site.register(Book)