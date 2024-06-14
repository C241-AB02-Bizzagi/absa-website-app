from django.shortcuts import render
import pyrebase
from firebase_admin import credentials, firestore, initialize_app
import requests as rq

# Konfigurasi Firebase Admin SDK
cred = credentials.Certificate('firebase-admin-sdk.json')
initialize_app(cred)

config={
	"apiKey": "AIzaSyAEjIqr3gvGZmST9CrkRVwAxdYOf-6g7Kk",
	"authDomain": "bizzagi-ea16d.firebaseapp.com",
	"databaseURL": "https://bizzagi-ea16d-default-rtdb.asia-southeast1.firebasedatabase.app",
	"projectId": "bizzagi-ea16d",
	"storageBucket": "bizzagi-ea16d.appspot.com",
	"messagingSenderId": "105672477056",
	"appId": "1:105672477056:web:7b4fcd245c900d7bbcd965"
}

firebase=pyrebase.initialize_app(config)
authe = firebase.auth()

db = firestore.client()

def signIn(request):
	if 'uid' in request.session:
		return render(request,"index.html")
	else:
		return render(request,"auth-login-basic.html")
def home(request):
	if 'uid' in request.session:
		return render(request,"index.html")
	else:
		return render(request,"auth-login-basic.html")
def dashboard(request):
	return render(request,"dashboards-analytics.html")
def formBasic(request):
	return render(request,"forms-basic.html")
def taskList(request):
	task_list_ref = db.collection("users").document(request.session['uid']).collection("task_list").stream()
	tasks = []
	for task in task_list_ref:
		tasks.append({"id" : task.id,"data": task.to_dict()})
	context = {'task_lists': tasks}
	return render(request,"tables-listjs.html", context)

def resultListNon(request, id_task=None):
	return render(request,"result.html")
def resultList(request):
	message="Pilih ID Task untuk melihat hasil!"
	return render(request,"result.html",{"message":message})

def send_post_request(csv_file, id_text):
	url = 'https://ml-bizzagi-gg67ha32dq-as.a.run.app/predict'
	if not isinstance(csv_file, str):
		files = {'file': (csv_file.name, csv_file.read(), csv_file.content_type)}
		data = {'id': id_text}
		response = rq.post(url, files=files, data=data)
		return response.json()
	else:
		files = {'file': open(csv_file, 'rb')}
		data = {'id': id_text}
		response = rq.post(url, files=files, data=data)
		return response.json()

def predict_text(request):
	try:
		text = request.POST.get('text')
		id = request.session['uid']
		message = send_post_request(text, id)
		return render(request,"result.html",{"message":message})
	except:
		message="Request Failed, check your data!"
		return render(request,"forms-basic.html",{"message":message})

def predict(request):
	try:
		csv_file = request.FILES['csv_file']
		id = request.session['uid']
		message = send_post_request(csv_file, id)
		return render(request,"tables-listjs.html")
	except:
		message="Request Failed, check your data!"
		return render(request,"forms-basic.html",{"message":message})

def postsignIn(request):
	email=request.POST.get('email')
	pasw=request.POST.get('pass')
	try:
		user=authe.sign_in_with_email_and_password(email,pasw)
	except:
		message="Invalid Credentials!!Please ChecK your Data"
		return render(request,"auth-login-basic.html",{"message":message})
	session_id=user['localId']
	request.session['uid']=str(session_id)
	return render(request,"index.html",{"email":email})

def logout(request):
	try:
		del request.session['uid']
	except:
		pass
	return render(request,"auth-login-basic.html")

def signUp(request):
	return render(request,"auth-register-basic.html")

def postsignUp(request):
	email = request.POST.get('email')
	passs = request.POST.get('pass')
	name = request.POST.get('name')
	try:
		# creating a user with the given email and password
		user=authe.create_user_with_email_and_password(email,passs)
		uid = user['localId']
		idtoken = request.session['uid']
		print(uid)
	except:
		return render(request, "auth-register-basic.html")
	return render(request,"auth-login-basic.html")
