from django.urls import path
from book.views import *

urlpatterns = [
    path('categories/', BooksCategoryListAPIView.as_view()),
    path('<int:category_id>/all/', category_books),
    path('all/', BookListAPIView.as_view()),
    path('<int:category_id>/all/<int:book_id>', BookDetailAPIView.as_view())
]