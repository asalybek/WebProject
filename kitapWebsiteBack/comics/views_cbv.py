from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from comics.filters import ComicsFilter
from comics.models import ComicsCategory, Comics

from comics.serializers import ComicsCategorySerializer2, ComicsSerializer2
from django_filters.rest_framework import DjangoFilterBackend


class ComicsCategoryListAPIView(generics.ListAPIView):
    queryset = ComicsCategory.objects.all()
    serializer_class = ComicsCategorySerializer2


class ComicsDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comics.objects.all()
    serializer_class = ComicsSerializer2
    permission_classes = (IsAuthenticated,)


class ComicsListAPIView(generics.ListCreateAPIView):
    queryset = Comics.objects.all()
    serializer_class = ComicsSerializer2
    filter_backends = (DjangoFilterBackend,)
    filter_class = ComicsFilter
