
document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    function containsSpecialChar(str) {
        var specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        return specialCharPattern.test(str);
    }

    function isValidEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    if (email && !isValidEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        event.preventDefault();
        return;
    }

    if (password && !containsSpecialChar(password)) {
        alert('Le mot de passe doit contenir au moins un caractère spécial.');
        event.preventDefault(); 
        return;
    }
});


