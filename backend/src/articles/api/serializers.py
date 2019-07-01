from rest_framework import serializers
from articles.models import Articles
from rest_framework.authtoken.models import Token


class ArticleSerializer(serializers.ModelSerializer):

  user = serializers.CharField(source='user.email', read_only=True)
  username = serializers.CharField(source='username.username', read_only=True)

  class Meta:
    model = Articles
    fields = ('id', 'user', 'title', 'username', 'content')


class TokenSerializer(serializers.ModelSerializer):

    useremail = serializers.CharField(source='user.email', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Token
        fields = ('key', 'useremail', 'username')

