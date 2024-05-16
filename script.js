function validateEmails() {
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email2").value;
    var errorElement = document.getElementById("emailError");

    if (email !== email2) {
        errorElement.style.display = "block";
        return false; // Prevent form submission
    } else {
        errorElement.style.display = "none";
        return true; // Allow form submission
    }
}