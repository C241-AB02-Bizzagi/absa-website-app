from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
	path('admin/', admin.site.urls),
	# Here we are assigning the path of our url
	path('', views.home, name="home"),
    path('login', views.home, name="home"),
	path('postsignIn/', views.postsignIn),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('forms/', views.formBasic, name="forms"),
    path('process/', views.taskList, name="process"),
    path('results/<str:id_task>/', views.resultListNon, name="resultss"),
    path('results/', views.resultList, name="results"),
	path('signUp/', views.signUp, name="signup"),
	path('logout/', views.logout, name="log"),
	path('postsignUp/', views.postsignUp),
    path('predict/', views.predict, name="predict")
]
