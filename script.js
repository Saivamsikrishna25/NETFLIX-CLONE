document.addEventListener("DOMContentLoaded", function () {
    // Language Selection Change Event
    const languageSelect = document.getElementById("languageSelect");
    languageSelect.addEventListener("change", function () {
        alert("Language changed to: " + this.value);
    });

    // Sign In Button Click Event
    const signInButton = document.querySelector(".sign_in_button");
    signInButton.addEventListener("click", function () {
        alert("Sign In button clicked!");
    });

    // Email Validation on Get Started Button Click
    const getStartedButton = document.querySelector(".get_started");
    const emailInput = document.querySelector(".email");

    getStartedButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        if (email === "") {
            alert("Please enter a valid email address.");
        } else if (!validateEmail(email)) {
            alert("Invalid email format. Please enter a correct email.");
        } else {
            alert("Thank you for signing up with: " + email);
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
