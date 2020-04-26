from rest_framework import status

from .models import *
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import ComicsSerializer2, ComicsCategorySerializer2


@api_view(['GET', 'POST'])
def category_list(request):
    if request.method == 'GET':
        permission_classes = (IsAuthenticated,)
        categories = ComicsCategory.objects.all()
        serializer = ComicsCategorySerializer2(categories, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ComicsCategorySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'POST'])
def category_comics(request, category_id):
    try:
        comics_category = ComicsCategory.objects.get(id=category_id)
    except ComicsCategory.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        comics = comics_category.comics_set.all()
        serializer = ComicsSerializer2(comics, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ComicsSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'error': serializer.errors},
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def comics_top_six(request):
    comics = Comics.objects.order_by('-rating')
    serializer = ComicsSerializer2(comics, many=True)
    return Response(serializer.data[0:6])


@api_view(['GET', 'PUT', 'DELETE'])
def comics_detail(request, pk):
    try:
        comics = Comics.objects.get(id=pk)
    except Comics.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = ComicsSerializer2(comics)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ComicsSerializer2(instance=comics, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        comics.delete()

        return Response({'deleted': True})
