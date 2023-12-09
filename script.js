const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.sign-up-link');

signupLink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');

btnPopup.addEventListener('click', ()=> {
    container.classList.add('active-popup');
});

const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});

function hashPassword(password) {
    return CryptoJS.SHA256(password).toString();
}

function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
    }

    // Hash the password
    var hashedPassword = hashPassword(password);


    document.getElementById('myForm').submit(); // Submit the form if validation passes
}

function validateEmail(email) {
    // Regular expression for a typical email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // List of approved top-level domains
    const approvedTlds = ['com', 'net', 'org', 'edu']; // Add more TLDs as needed
  
    // Extract the domain from the email
    const domain = email.split('@')[1];
  
    // Check if the email format and TLD are valid
    if (emailRegex.test(email) && approvedTlds.includes(domain.split('.').pop())) {
      document.getElementById('email').setCustomValidity('');
    } else {
      document.getElementById('email').setCustomValidity('Enter a valid email address');
    }
  }