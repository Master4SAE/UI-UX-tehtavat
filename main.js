    'use strict'
    document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector(".SignIn-btn");
    const closeButton = document.getElementById("cancel-btn");
    const form = dialog.querySelector("form");
    const nameInput = form.querySelector("input[type='text']");
    const emailInput = form.querySelector("input[type='email']");
    const passwordInput = form.querySelector("input[type='password']");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    form.addEventListener("submit", (e) => {
        let valid = true;

        // Validate Name
        if (nameInput.value.length < 3) {
            valid = false;
            alert("Name must be at least 3 characters.");
        }

        // Validate Email
        if (!/@metropolia\..+/.test(emailInput.value)) {
            valid = false;
            alert("Email should be from @metropolia.");
        }

        // Validate Password
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{5,}$/.test(passwordInput.value)) {
            valid = false;
            alert("Password should be at least 5 characters and contain both letters and numbers.");
        }
        if (!valid) {
            e.preventDefault();
        }
        dialog.close();

    });
});












