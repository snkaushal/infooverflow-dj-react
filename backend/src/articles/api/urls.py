from rest_framework.routers import DefaultRouter
from articles.api.views import ArticlesViewSet

router = DefaultRouter()
router.register(r'', ArticlesViewSet, base_name='api')
urlpatterns = router.urls

# urlpatterns = [
#     path('', ArticlesListView.as_view(), name='articleslistview'),
#     path('create', ArticlesCreateView.as_view(), name='articleslistview'),
#     path('<pk>', ArticlesDetialView.as_view(), name='articlesdetailview'),
#     path('<pk>/update', ArticlesUpdateView.as_view(), name='articlesdetailview'),
#     path('<pk>/delete', ArticlesDestroyView.as_view(), name='articlesdetailview')
# ]
