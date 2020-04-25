from django.urls import path

from .views_cbv import ComicsCategoryListAPIView, ComicsDetailAPIView, ComicsListAPIView
from .view_fbv import category_comics

urlpatterns = [
    path('<int:category_id>/all/<int:pk>', ComicsDetailAPIView.as_view()),
    path('', ComicsCategoryListAPIView.as_view()),
    path('<int:category_id>/all', category_comics),
    path('all', ComicsListAPIView.as_view())
]
