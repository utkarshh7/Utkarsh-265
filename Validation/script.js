document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (!email) {
        alert("Email is required.");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        isValid = false;
    }

    if (!password) {
        alert("Password is required.");
        isValid = false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});