from django.urls import path

from .views import ArticlesListView,ArticlesDetialView

urlpatterns = [
    path('', ArticlesListView.as_view(), name='articleslistview'),
    path('<pk>', ArticlesDetialView.as_view(), name='articlesdetailview')
]
