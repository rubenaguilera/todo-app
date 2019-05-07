from django.contrib import admin
from django.urls import path, include
from rest_framework_bulk.routes import BulkRouter
from todo import views


router = BulkRouter()
router.register(r'todos', views.TodoViewSet, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/todos/delete_bulk', views.delete_todos_bulk, name='todo')
]
