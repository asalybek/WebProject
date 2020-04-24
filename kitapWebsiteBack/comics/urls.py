from django.urls import path

from .views_cbv import ComicsCategoryListAPIView, ComicsDetailAPIView
from .view_fbv import category_comics

urlpatterns = [
    path('<category_name>/all/<int:pk>', ComicsDetailAPIView.as_view()),
    path('', ComicsCategoryListAPIView.as_view()),
    path('<category_name>/all', category_comics)
]
