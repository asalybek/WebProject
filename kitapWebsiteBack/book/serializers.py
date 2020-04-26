from rest_framework import serializers
from book.models import Book, BooksCategory


class BooksCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BooksCategory
        fields = ('id', 'name')


class BookSerializer(serializers.ModelSerializer):
    category = BooksCategorySerializer(read_only=True)

    class Meta:
        model = Book
        fields = ('id', 'name', 'author', 'image', 'rating', 'category', 'category_id')


class BookSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=300)
    author = serializers.CharField(max_length=300)
    image = serializers.CharField(max_length=300)
    rating = serializers.FloatField()
    category_id = serializers.IntegerField()

    def create(self, validated_data):
        book = Book.objects.create(
            name=validated_data.get('name'),
            author=validated_data.get('description'),
            image=validated_data.get('image'),
            rating=validated_data.get('rating'),
            category_id=validated_data.get('category_id')
        )
        return book

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.author = validated_data.get('author', instance.author)
        instance.image = validated_data.get('image', instance.image)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.category_id = validated_data.get('category_id', instance.category_id)
        instance.save()
        return instance