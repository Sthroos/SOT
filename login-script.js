document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is already logged in
    checkLoginStatus();
});

function performLogin() {
    // For simplicity, let's assume login is successful
    // You would typically perform server-side validation here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if the provided username and password match the test user
    if (username === 'testuser' && password === 'testpassword') {
        var timestamp = new Date().getTime();

        // Store login status in localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('loginTime', timestamp);

        // Redirect to main.html
        window.location.href = 'main.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function performLogout() {
    // Clear stored login status
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');

    // Hide content, show login form
    showLoginContainer();
}

function checkLoginStatus() {
    var loggedIn = localStorage.getItem('loggedIn');
    var loginTime = localStorage.getItem('loginTime');

    if (loggedIn && loginTime) {
        // Check if login is within the last hour (in milliseconds)
        var oneHour = 60 * 60 * 1000;
        if (new Date().getTime() - parseInt(loginTime) < oneHour) {
            showContentContainer();
        } else {
            // Logout if login is older than an hour
            performLogout();
        }
    } else {
        // Not logged in
        showLoginContainer();
    }
}

function showLoginContainer() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('content-container').style.display = 'none';
}

function showContentContainer() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('content-container').style.display = 'block';
}
