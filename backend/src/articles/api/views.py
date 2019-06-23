from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.models import Articles
from .serializers import ArticleSerializer

class ArticlesListView(ListAPIView):
  queryset = Articles.objects.all()
  serializer_class = ArticleSerializer

class ArticlesDetialView(RetrieveAPIView):
  queryset = Articles.objects.all()
  serializer_class = ArticleSerializer