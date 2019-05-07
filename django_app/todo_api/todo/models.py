from django.db import models


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    state = models.CharField(max_length=20)
    dueDate = models.DateField()

    def _str_(self):
        return self.text
