
const countryCards =
    document.querySelectorAll(".country-card");

const continueBtn =
    document.getElementById("continueBtn");

const laterBtn =
    document.getElementById("laterBtn");

const countryStage =
    document.getElementById("countryStage");

const goalStage =
    document.getElementById("goalStage");

let selectedCountry = "";


// =========================================
// COUNTRY SELECTION
// =========================================

countryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Remove previous selection
        countryCards.forEach(function(item) {
            item.classList.remove("selected");
        });

        // Select current country
        card.classList.add("selected");

        // Store selected country
        selectedCountry =
            card.dataset.country;

        // Enable Continue
        continueBtn.disabled = false;

    });

});


// =========================================
// SHOW GOAL PAGE
// =========================================

function showGoalPage() {

    // Save country
    localStorage.setItem(
        "speakbloomCountry",
        selectedCountry
    );


    // Hide country page
    countryStage.style.display = "none";


    // Show goal stage
    goalStage.style.display = "block";


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // -------------------------
    // 1. Emoji appears
    // -------------------------

    setTimeout(function() {

        document
            .getElementById("goalEmoji")
            .classList.add("show");

    }, 100);


    // -------------------------
    // 2. Text appears
    // -------------------------

    setTimeout(function() {

        document
            .getElementById("goalText")
            .classList.add("show");

    }, 400);


    // -------------------------
    // 3. Options appear
    // -------------------------

    const goalCards =
        document.querySelectorAll(".goal-card");

    goalCards.forEach(function(card, index) {

        setTimeout(function() {

            card.classList.add("show");

        }, 650 + (index * 120));

    });


    // -------------------------
    // 4. Continue appears
    // -------------------------

    setTimeout(function() {

        document
            .getElementById("goalContinue")
            .classList.add("show");

    }, 650 + (goalCards.length * 120) + 150);

}


// =========================================
// COUNTRY CONTINUE
// =========================================

continueBtn.addEventListener(
    "click",
    function() {

        if (selectedCountry === "") {
            return;
        }

        showGoalPage();

    }
);


// =========================================
// CHOOSE LATER
// =========================================

laterBtn.addEventListener(
    "click",
    function() {

        selectedCountry = "Not selected";

        showGoalPage();

    }
);


// =========================================
// GOAL SELECTION
// =========================================


/* =========================================
   GOAL SELECTION — MULTI SELECT
========================================= */

const goalCards = document.querySelectorAll(".goal-card");
const goalContinue = document.getElementById("goalContinue");

let selectedGoals = [];

goalCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const goal = card.querySelector("strong").textContent.trim();

        if (card.classList.contains("selected")) {
            card.classList.remove("selected");

            selectedGoals = selectedGoals.filter(function (item) {
                return item !== goal;
            });
        } else {
            card.classList.add("selected");
            selectedGoals.push(goal);
        }

        goalContinue.disabled = selectedGoals.length === 0;
    });
});



// =========================================
// GOAL CONTINUE
// =========================================


/* =========================================
   GOAL CONTINUE
========================================= */

goalContinue.addEventListener("click", function () {

    if (selectedGoals.length === 0) {
        return;
    }

    // Save all selected goals
    localStorage.setItem(
        "speakbloomGoals",
        JSON.stringify(selectedGoals)
    );

    console.log("Saved goals:", selectedGoals);

    // Page 3 will be connected here later
    alert("Your goals have been saved!");

});
