from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from book.models import BooksCategory, Book
from book.serializers import BooksCategorySerializer, BookSerializer, BookSerializer2


@api_view(["GET"])
def category_books(request, category_id):
    try:
        c = BooksCategory.objects.get(id=category_id)
        serializer = BookSerializer(
            Book.objects.filter(category=c),
            many=True
        )
        return Response(serializer.data)
    except BooksCategory.DoesNotExist as e:
        return Response({'error': str(e)})
    except Book.DoesNotExist as e:
        return Response({'error': str(e)})

class BooksCategoryListAPIView(APIView):
    def get(self, request):
        c = BooksCategory.objects.all()
        serializer = BooksCategorySerializer(c, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BooksCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class BookListAPIView(APIView):
    def get(self, request):
        b = Book.objects.all()
        serializer = BookSerializer(b, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#
#
# class BookDetailAPIView(APIView):
#     def get_object(self, book_id):
#         try:
#             return Book.objects.get(id=book_id)
#         except BooksCategory.DoesNotExist as e:
#             return Response({'error': str(e)})
#
#     def get(self, request, book_id):
#         b = self.get_object(book_id)
#         serializer = BookSerializer(b)
#         return Response(serializer.data)
#
#     def put(self, request, book_id):
#         b = self.get_object(book_id)
#         serializer = BookSerializer(instance=b, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response({'error': serializer.errors})
#
#     def delete(self, request, book_id):
#         b = self.get_object(book_id)
#         b.delete()
#         return Response({'deleted': True})


# class BooksCategoryListAPIView(generics.ListAPIView):
#     queryset = BooksCategory.objects.all()
#     serializer_class = BooksCategorySerializer


class BookDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


# class BookListAPIView(generics.ListAPIView):
#     queryset = Book.objects.all()
#     serializer_class = BookSerializer


