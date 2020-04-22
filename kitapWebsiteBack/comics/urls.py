from django.urls import path

from .views_cbv import ComicsCategoryListAPIView, ComicsDetailAPIView
from .view_fbv import category_comics

urlpatterns = [
    path('<int:category_id>/all/<int:pk>', ComicsDetailAPIView.as_view()),
    # path('<int:pk>/all', ComicsCategoryListAPIView.as_view())
    path('<int:category_id>/all', category_comics)
]
