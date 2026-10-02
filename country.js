// =========================================
// COUNTRY SELECTION
// =========================================

const countryCards = document.querySelectorAll(".country-card");
const continueBtn = document.getElementById("continueBtn");
const laterBtn = document.getElementById("laterBtn");

let selectedCountry = "";


// Select country
countryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Remove selection from all cards
        countryCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Select clicked card
        card.classList.add("selected");

        // Store country
        selectedCountry = card.dataset.country;

        // Enable continue button
        continueBtn.disabled = false;
    });

});


// Continue
continueBtn.addEventListener("click", function () {

    if (selectedCountry === "") {
        return;
    }

    // Save country for later use
    localStorage.setItem("speakbloomCountry", selectedCountry);

    // Move to next onboarding page
    window.location.href = "goal.html";

});


// Skip country selection
laterBtn.addEventListener("click", function () {

    localStorage.setItem("speakbloomCountry", "Not selected");

    // Move to next onboarding page
    window.location.href = "goal.html";

});