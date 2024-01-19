document.addEventListener('DOMContentLoaded', function () {
    // Initial content
    showContent('initial');

    // Add click event listeners to the buttons
    document.getElementById('topLeftButton').addEventListener('click', function () {
        showContent('member-admin');
    });

    document.getElementById('topRightButton').addEventListener('click', function () {
        showContent('login');
    });
    document.getElementById('topRightButton').addEventListener('mouseover', showDropdown);
    document.getElementById('topRightButton').addEventListener('mouseout', hideDropdown);
});

// Function to show content based on the target
function showContent(target) {
    // Hide all content sections initially
    document.getElementById('initial-content').style.display = 'none';
    document.getElementById('member-admin-content').style.display = 'none';
    document.getElementById('login-content').style.display = 'none';

    // Update content based on the target
    if (target === 'initial') {
        document.getElementById('initial-content').style.display = 'flex';
    } else if (target === 'member-admin') {
        document.getElementById('member-admin-content').style.display = 'flex';
    } else if (target === 'login') {
        document.getElementById('login-content').style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();
    updateWelcomeMessage();
});

function updateWelcomeMessage() {
    var usernamePlaceholder = document.getElementById('usernamePlaceholder');
    var username = localStorage.getItem('username');

    if (username) {
        usernamePlaceholder.innerText = username;
    }
}

function showDropdown() {
    // Show the dropdown content
    document.getElementById('dropdownContent').style.display = 'block';
}

function hideDropdown() {
    // Hide the dropdown content
    document.getElementById('dropdownContent').style.display = 'none';
}

function performLogout() {
    // Clear stored login status
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');

    // Redirect to the login page
    window.location.href = 'index.html'; // Change 'login.html' to the actual login page URL
}