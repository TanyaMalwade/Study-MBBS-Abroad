document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar on Scroll
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("main");
        if (window.scrollY > 50) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });

    // Dropdown Menu Toggle for MBBS Abroad
    document.querySelector(".header-icon").addEventListener("click", function () {
        let dropdown = document.querySelector(".dropdown-menu");
        dropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        let dropdown = document.querySelector(".dropdown-menu");
        let headerIcon = document.querySelector(".header-icon");

        if (!headerIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });

    // Profile Menu Toggle
    document.querySelector(".profile-icon").addEventListener("click", function () {
        document.querySelector(".dropdown").classList.toggle("show");
    });

    // Form Validation
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("Country").value;

        if (name === "" || email === "" || phone === "" || country === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Your application has been submitted successfully!");
        document.querySelector("form").reset(); // Clear form
    });

    // Email Validation Function
    function validateEmail(email) {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Phone Number Validation Function
    function validatePhone(phone) {
        let phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});
