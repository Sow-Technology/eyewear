from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .forms import DocumentForm
from .models import Document
from django.contrib.auth.models import User
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
def upload_file(request):
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            print("Form is valid")
            
            document_instance=form.save()
            order_id=document_instance.order_id
            # username=request.session.get('username')
            # print(username)
            # user=User.objects.get(username=username)
            # user_email=user.email
            test_mail="sajagaga2806@gmail.com"
            reciever_mail=[test_mail]
            context={
                "username":"Sample User",
                "order_id":order_id
            }
            mail=render_to_string('complaint_mail.html',context)
            subject=f"Your Complaint for order id:{order_id} is recieved by us"
            new_mail=EmailMessage(subject,mail,"agrawalsiddhi836@gmail.com",reciever_mail)
            new_mail.content_subtype = 'html'
            new_mail.send()
            return redirect('file_list')
        else:
            print("Form is not valid")
    else:
        form = DocumentForm()
    return render(request, 'complaint.html', {'form': form})

def file_list(request):
    documents = Document.objects.all()
    return render(request, 'file_list.html', {'documents': documents})
