from django.urls import path

from .views import ArticlesListView, ArticlesDetialView, ArticlesCreateView, ArticlesUpdateView, ArticlesDestroyView

urlpatterns = [
    path('', ArticlesListView.as_view(), name='articleslistview'),
    path('create', ArticlesCreateView.as_view(), name='articleslistview'),
    path('<pk>', ArticlesDetialView.as_view(), name='articlesdetailview'),
    path('<pk>/update', ArticlesUpdateView.as_view(), name='articlesdetailview'),
    path('<pk>/delete', ArticlesDestroyView.as_view(), name='articlesdetailview')
]
