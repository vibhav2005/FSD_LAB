function validateForm() {
    // Get values from the form
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Error message container
    var errorMessage = 'Feild must not be empty';

    // Check if any field is empty
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        errorMessage = "All fields must be filled out!";
        alert(errorMessage);
        return false;
    }

    // Check if the phone number contains exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        errorMessage = "Phone number must be 10 digits!";
        alert(errorMessage);
        return false;
    }

    // Check if the email contains '@'
    if (!email.includes('@')) {
        errorMessage = "Email address must contain '@'.";
        alert(errorMessage);
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        errorMessage = "Password and Confirm Password do not match!";
        alert(errorMessage);
        return false;
    }

    // If all validations pass
    alert("Registration successful!");
    return true;
}
