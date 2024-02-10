# myapp/management/commands/flush_model.py

from django.core.management.base import BaseCommand
from products.models import Products
class Command(BaseCommand):
    help = 'Flushes data from MyModel'

    def handle(self, *args, **options):
        # Delete all instances of MyModel
        Products.objects.all().delete()

        self.stdout.write(self.style.SUCCESS('Successfully flushed data from MyModel'))
