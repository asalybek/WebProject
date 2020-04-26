from django_filters import rest_framework as filters

from comics.models import Comics


class ComicsFilter(filters.FilterSet):
    # Product.objects.filter(name__contains=name)
    name = filters.CharFilter(lookup_expr='contains')

    # Product.objects.filter(price=price)
    rating = filters.NumberFilter(lookup_expr='exact')

    class Meta:
        model = Comics
        fields = ('name', 'rating')