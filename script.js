document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate user login (you can replace this with a server-based authentication)
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'user' && password === 'password') {
            // Store user information in local storage
            localStorage.setItem('loggedInUser', username);

            // Redirect to the details page
            window.location.href = 'Details.html';
        } else {
            loginError.textContent = 'Invalid username or password';
        }
    });

    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const userDisplay = document.getElementById('user-display');
        userDisplay.textContent = loggedInUser;
    }
});
