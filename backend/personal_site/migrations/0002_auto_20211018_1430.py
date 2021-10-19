# Generated by Django 3.2.8 on 2021-10-18 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal_site', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('last_modified', models.DateTimeField(auto_now=True)),
                ('summary_text', models.TextField()),
                ('image_link', models.TextField()),
                ('blog_entry', models.TextField()),
            ],
        ),
        migrations.RenameField(
            model_name='project',
            old_name='image_link',
            new_name='image_one_link',
        ),
        migrations.RemoveField(
            model_name='project',
            name='description',
        ),
        migrations.AddField(
            model_name='project',
            name='image_three_link',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='image_two_link',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='long_description',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='order',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='project',
            name='short_description',
            field=models.CharField(default=0, max_length=240),
            preserve_default=False,
        ),
    ]