from .models import *
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import ComicsSerializer2
@api_view(['GET'])
def category_comics(request, category_name):
    try:
        comics_category = ComicsCategory.objects.get(name=category_name)
    except ComicsCategory.DoesNotExist as e:
        return Response({'error': str(e)})
    if request.method == 'GET':
        comics = comics_category.comics_set.all()
        serializer = ComicsSerializer2(comics, many=True)
        return Response(serializer.data)
