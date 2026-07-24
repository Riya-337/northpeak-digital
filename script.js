// Hamburger menu toggle
let hamburger = document.getElementById('hamburger');
let mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
let mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
    });
});


// Contact form validation
let form = document.getElementById('contact-form');
let successMsg = document.getElementById('success-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let hasError = false;

    let name = document.getElementById('name');
    let nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        name.classList.add('error');
        hasError = true;
    } else {
        nameError.textContent = '';
        name.classList.remove('error');
    }

    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Please enter your email.';
        email.classList.add('error');
        hasError = true;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        email.classList.add('error');
        hasError = true;
    } else {
        emailError.textContent = '';
        email.classList.remove('error');
    }

    let service = document.getElementById('service');
    let serviceError = document.getElementById('service-error');
    if (service.value === '') {
        serviceError.textContent = 'Please select a service.';
        service.classList.add('error');
        hasError = true;
    } else {
        serviceError.textContent = '';
        service.classList.remove('error');
    }

    let message = document.getElementById('message');
    let messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.textContent = 'Please enter a message.';
        message.classList.add('error');
        hasError = true;
    } else if (message.value.trim().length < 10) {
        messageError.textContent = 'Message is too short.';
        message.classList.add('error');
        hasError = true;
    } else {
        messageError.textContent = '';
        message.classList.remove('error');
    }

    if (!hasError) {
        successMsg.textContent = '✅ Message sent! We will get back to you within 24 hours.';
        form.reset();
    }
});
