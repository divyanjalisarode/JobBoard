// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Clear previous error messages

    if (username === 'user' && password === 'password') {
        // Example: Redirect to a different page or show a success message
        alert('Login successful!');
        
        window.location.href = 'edash.html'; // Redirect to a dashboard or home page
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password';
    }
});
