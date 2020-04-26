from rest_framework import serializers
from book.models import Book, BooksCategory


class BooksCategorySerializer(serializers.Serializer):
    class Meta:
        model = BooksCategory
        fields = ('id', 'name')


class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=300)
    author = serializers.CharField(max_length=300)
    image = serializers.CharField
    category_id = serializers.IntegerField()