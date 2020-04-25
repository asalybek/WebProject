from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from comics.models import ComicsCategory, Comics

from comics.serializers import ComicsCategorySerializer2, ComicsSerializer2


class ComicsCategoryListAPIView(generics.ListAPIView):
    queryset = ComicsCategory.objects.all()
    serializer_class = ComicsCategorySerializer2


class ComicsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comics.objects.all()
    serializer_class = ComicsSerializer2


class ComicsListAPIView(generics.ListAPIView):
    queryset = Comics.objects.all()
    serializer_class = ComicsSerializer2

