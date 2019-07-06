from django.db import models
from django.conf import settings

# Create your models here.
class Articles(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        default=1,
        related_name='useremail'
    )
    username = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        default=1,
    )
    id = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return self.title
