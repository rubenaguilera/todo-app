from rest_framework import serializers
from rest_framework_bulk import (
    BulkListSerializer,
    BulkSerializerMixin,
)
from .models import Todo


class TodoSerializer(BulkSerializerMixin, serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'text', 'state', 'dueDate')
        list_serializer_class = BulkListSerializer
