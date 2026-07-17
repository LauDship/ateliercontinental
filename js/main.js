// Dynamic Greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("dynamic-greeting");
    if (greetingElement) {
        const hours = new Date().getHours();
        let greeting = "Welcome to Atelier Continental";

        if (hours < 12) {
            greeting = "Good Morning. Welcome to Atelier Continental.";
        } else if (hours < 18) {
            greeting = "Good Afternoon. Welcome to Atelier Continental.";
        } else {
            greeting = "Good Evening. Welcome to Atelier Continental.";
        }
        greetingElement.textContent = greeting;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");
                productCards.forEach(card => {
                    if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
});
// Append this to your existing js/main.js file

// 3. Interactive Contact Form Handler
document.addEventListener("DOMContentLoaded", () => {
    const appointmentForm = document.getElementById("appointmentForm");
    const successBox = document.getElementById("formSuccess");

    if (appointmentForm && successBox) {
        appointmentForm.addEventListener("submit", (event) => {
            // Prevent standard form submission refresh behavior
            event.preventDefault();

            // Hide the active form gracefully
            appointmentForm.style.display = "none";

            // Reveal the luxury confirmation card container
            successBox.style.display = "block";
        });
    }
});
// Append this to your existing js/main.js file

// 4. Live Countdown Timer for the Grand Launching
document.addEventListener("DOMContentLoaded", () => {
    const countdownDisplay = document.getElementById("countdown-display");
    
    if (countdownDisplay) {
        // Set target date: July 28, 2026 at 19:00:00
        const targetDate = new Date("July 28, 2026 19:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // If the event date has passed
            if (distance < 0) {
                countdownDisplay.textContent = "The Event Has Begun!";
                clearInterval(timerInterval);
                return;
            }

            // Calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display results in the target placeholder
            countdownDisplay.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
        };

        // Run immediately on page load, then update every 1 second
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }
});