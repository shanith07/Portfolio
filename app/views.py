from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

def home(request):
    return render(request, "index.html")


def contact(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        full_message = f"""
New Portfolio Contact

Name: {name}

Email: {email}

Subject: {subject}

Message:

{message}
"""

        send_mail(
            subject,
            full_message,
            settings.EMAIL_HOST_USER,
            ["shanithshaji171@gmail.com"],
            fail_silently=False
        )



        messages.success(request, "Your message has been sent successfully!")

        return redirect("/#contact")

    return redirect("home")