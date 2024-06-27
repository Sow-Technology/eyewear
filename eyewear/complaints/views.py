from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .forms import DocumentForm
from .models import Document


def upload_file(request):
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            print("Form is valid")
            form.save()
            return redirect('file_list')
        else:
            print("Form is not valid")
    else:
        form = DocumentForm()
    return render(request, 'complaint.html', {'form': form})

def file_list(request):
    documents = Document.objects.all()
    return render(request, 'file_list.html', {'documents': documents})
