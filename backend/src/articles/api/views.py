from rest_framework import viewsets

from articles.models import Articles
from .serializers import ArticleSerializer

class ArticlesViewSet(viewsets.ModelViewSet):
  queryset = Articles.objects.all()
  serializer_class = ArticleSerializer