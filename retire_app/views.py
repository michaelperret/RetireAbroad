from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
import csv

# Create your views here.

def landing(request):
    return render(request, 'landing.html')

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("profile")
    else:
        form = UserCreationForm()

    return render(request, "registration/register.html", {
        'form': form})

def search(request):

    # #getting "no such file or directory: 'data.csv'
    # with open('data.csv', 'rb') as csvfile:
    #     data_reader = csv.reader(csvfile, delimiter='')
    #     data_list = []
    #     for row in data_reader:
    #         print ', '.join(row)
    #         data_list.append(row)
    # data = {'data':data_list}

    return render(request, 'search.html')



