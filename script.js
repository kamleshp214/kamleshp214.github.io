document.addEventListener("DOMContentLoaded", () => {
    // Update time
    function updateTime() {
        document.getElementById("clock").innerText = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const nameInput = document.getElementById("nameInput");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        themeToggle.innerText = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";

        // Ensure input text color updates immediately
        nameInput.style.color = document.body.classList.contains("dark-mode") ? "white" : "black";
    });

    // Custom Name Input
    const username = document.getElementById("username");
    nameInput.addEventListener("input", () => {
        username.innerText = nameInput.value.toUpperCase() || "STRANGER";
    });

    // Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "color": { "value": "#ffffff" },
            "size": { "value": 3 },
            "move": { "speed": 1.5 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "repulse" } }
        }
    });

    function updateParticlesColor() {
        let color = document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000";
        document.querySelector("#particles-js canvas").style.filter = color === "#ffffff" ? "none" : "invert(1)";
    }
});
