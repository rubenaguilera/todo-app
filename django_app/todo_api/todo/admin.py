from django.contrib import admin
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('text', 'state', 'dueDate')


admin.site.register(Todo, TodoAdmin)
