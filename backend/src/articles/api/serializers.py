from rest_framework import serializers

from articles.models import Articles

class ArticleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Articles
    fields = ('id', 'user', 'title', 'content')