from django.db import models


class ComicsCategory(models.Model):
    name = models.CharField(max_length=200)


class ComicsContent(models.Model):
    img1 = models.TextField(default=None, null=True)
    img2 = models.TextField(default=None, null=True)
    img3 = models.TextField(default=None, null=True)
    img4 = models.TextField(default=None, null=True)
    img5 = models.TextField(default=None, null=True)
    img6 = models.TextField(default=None, null=True)
    img7 = models.TextField(default=None, null=True)
    img8 = models.TextField(default=None, null=True)
    img9 = models.TextField(default=None, null=True)
    img10 = models.TextField(default=None, null=True)
    img11 = models.TextField(default=None, null=True)
    img12 = models.TextField(default=None, null=True)
    img13 = models.TextField(default=None, null=True)
    img14 = models.TextField(default=None, null=True)
    img15 = models.TextField(default=None, null=True)
    img16 = models.TextField(default=None, null=True)
    img17 = models.TextField(default=None, null=True)
    img18 = models.TextField(default=None, null=True)


class Comics(models.Model):
    poster = models.TextField(default="")
    name = models.CharField(max_length=300, default="")
    category = models.ForeignKey(ComicsCategory, on_delete=models.CASCADE, default=1)
    rating = models.FloatField(default=5)
    content = models.ForeignKey(ComicsContent, on_delete=models.CASCADE, default=None, null=True)
