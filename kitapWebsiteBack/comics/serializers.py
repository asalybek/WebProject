from rest_framework import serializers

from comics.models import ComicsCategory, Comics, ComicsContent


class ComicsCategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = ComicsCategory
        fields = ('id', 'name')


class ComicsContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComicsContent
        fields = ('img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8',
                  'img9', 'img10', 'img11', 'img12', 'img13', 'img14', 'img15', 'img16',
                  'img17', 'img18')


class ComicsSerializer2(serializers.ModelSerializer):
    category = ComicsCategorySerializer2(read_only=True)
    content = ComicsContentSerializer(read_only=True)

    class Meta:
        model = Comics
        fields = ('id', 'name', 'poster', 'rating', 'category', 'category_id', 'content', 'content_id',)


class ComicsCategorySerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()


class ComicsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    poster = serializers.CharField()
    rating = serializers.FloatField()
    content_id = serializers.IntegerField()
    category_id = serializers.IntegerField()

    def create(self, validated_data):
        comics = Comics.objects.create(name=validated_data.get('name'), poster=validated_data('poster',
                                        rating=validated_data.get('rating'), content_id=validated_data.get('content_id')),
                                       category_id=validated_data.get('category_id'))
        return comics

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.poster = validated_data.get('poster', instance.poster)
        instance.rating = validated_data.get('rating', instance.rating)
        instance.content_id = validated_data.get('content_id', instance.content_id)
        instance.category_id = validated_data.get('category_id', instance.category_id)
        instance.save()
        return instance
