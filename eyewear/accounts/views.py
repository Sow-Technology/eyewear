from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from django.http import JsonResponse
from otp.models import *
import random
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not username or not email or not password:
            return Response({'error': 'Username, email, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username is already taken.'}, status=401)
        
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email is already registered.'}, status=402)
        
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            request.session['username']=username
            def generate_otp(self):
             self.otp = str(random.randint(100000, 999999))
            otp=generate_otp()
            new_otp=Otp.objects.create(username=username,otp=otp,status="active")
            new_otp.save()
            reciever_mail=[user.email]
            sender_mail="agrawalsiddhi836@gmail.com"
            subject="Otp for verification"
            context={
                "otp":otp
            }
            mail=render_to_string('otp_verification.html',context)
            email = EmailMessage(subject, mail, sender_mail, reciever_mail)
            email.content_subtype = 'html'
            return Response({'message': 'Registration successful.'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=user.username, password=password)
            
            if user is not None:
                request.session['username']=user.username
                return Response({'message': 'Login successful.'}, status=status.HTTP_200_OK) 
            
            
            else:
                return Response({'error': 'Invalid credentials. Please try again.'}, status=status.HTTP_401_UNAUTHORIZED)
        except User.DoesNotExist:
            return Response({'error': 'Invalid credentials. Please try again.'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
@csrf_exempt
def user_list(request):
    if request.method == 'GET':
        users = User.objects.all()
        
        user_list = []
        for user in users:
            user_list.append({
                'username': user.username,
                'email': user.email,
                'session_user':request.session.get('username')
            })
        
        return JsonResponse(user_list, safe=False, status=status.HTTP_200_OK)
    
    return JsonResponse({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED) 

@api_view(['POST'])
@csrf_exempt
def verify_opt(request):
    if request.method == 'POST':
     username=request.session.get('username')
     otp=request.data.get('otp')
     history=Otp.objects.filter(otp=otp,status="active")[0]
     stored_otp=history.otp
     if(otp==stored_otp):
         history.status="verified"
    return HttpResponse('otp verified',status=200)