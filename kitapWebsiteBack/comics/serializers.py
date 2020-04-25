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
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()



