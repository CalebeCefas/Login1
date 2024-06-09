document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
    const loginButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '') {
            alert('Please enter your username.');
            usernameInput.focus();
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            passwordInput.focus();
            return;
        }

        console.log('Form sent:', {
            username: username,
            password: password,
            rememberMe: rememberMeCheckbox.checked
        });

        alert('Login successful!');
        form.reset();
    });
});
