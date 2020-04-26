from django.urls import path
from book.views import *

urlpatterns = [
    path('categories/', BooksCategoryListAPIView.as_view()),
    path('categories/<int:category_id>/books/', category_books),
    path('books/', BookListAPIView.as_view()),
    path('books/<int:book_id>/', BookDetailAPIView.as_view())
]