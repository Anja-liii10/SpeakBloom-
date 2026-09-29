const loginForm = document.getElementById("loginForm");

const passwordInput = document.getElementById("password");

const showPassword = document.getElementById("showPassword");

const message = document.getElementById("message");


// ============================
// SHOW / HIDE PASSWORD
// ============================

showPassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        showPassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "👁";

    }

});

// =================================
// CHANGING ENGLISH WORDS
// =================================

const words = [
    "speak",
    "confidence",
    "fluency",
    "pronunciation",
    "vocabulary",
    "expression",
    "communication",
    "conversation"
];


let wordIndex = 0;

const changingWord =
    document.getElementById("changingWord");


function changeWord() {

    changingWord.style.opacity = "0";

    setTimeout(function () {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        changingWord.textContent =
            words[wordIndex];

        changingWord.style.opacity = "1";

    }, 500);
}


setInterval(changeWord, 4000);

// =================================
// CHANGING ENGLISH WORDS
// =================================

const words = [
    "speak",
    "confidence",
    "fluency",
    "pronunciation",
    "vocabulary",
    "expression",
    "communication",
    "conversation"
];


let wordIndex = 0;

const changingWord =
    document.getElementById("changingWord");


function changeWord() {

    changingWord.style.opacity = "0";

    setTimeout(function () {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        changingWord.textContent =
            words[wordIndex];

        changingWord.style.opacity = "1";

    }, 500);
}


setInterval(changeWord, 4000);


// ============================
// LOGIN
// ============================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        passwordInput.value.trim();


    if (email === "" || password === "") {

        message.textContent =
            "Please fill in all fields.";

        message.style.color = "#d33";

        return;
    }


    message.textContent =
        "Welcome to SpeakBloom 🌱";

    message.style.color = "#4d7c50";


    console.log("Email:", email);

});