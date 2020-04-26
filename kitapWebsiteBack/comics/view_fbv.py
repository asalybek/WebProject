from .models import *
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import ComicsSerializer2
@api_view(['GET'])
def category_comics(request, category_id):
    try:
        comics_category = ComicsCategory.objects.get(id=category_id)
    except ComicsCategory.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        comics = comics_category.comics_set.all()
        serializer = ComicsSerializer2(comics, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def comics_top_six(request):
    comics = Comics.objects.order_by('-rating')
    serializer = ComicsSerializer2(comics, many=True)
    return Response(serializer.data[0:6])