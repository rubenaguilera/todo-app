from rest_framework_bulk import ListBulkCreateUpdateAPIView, BulkModelViewSet
from .serializers import TodoSerializer
from .models import Todo
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection


class TodoView(ListBulkCreateUpdateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class TodoViewSet(BulkModelViewSet):
    model = Todo
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


@csrf_exempt
def delete_todos_bulk(request):
    if request.method == 'DELETE':
        cursor = connection.cursor()
        id_list = request.GET.getlist('ids', [])
        if id_list:
            id_list = id_list[0]
        delete_query = 'DELETE FROM todo_todo WHERE id IN ({})'.format(id_list)
        cursor.execute(delete_query)
        return HttpResponse(status=204)
    return HttpResponse(status=400)
