
const targetDate = new Date(2026, 10, 14, 00, 00, 0);

const birthdayPassword = "081005";

// Countdown
const countdown = setInterval(function () {
    const now = new Date();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        document.getElementById("message").innerText =
            "Happy Birthday! You can continue now 💗";

        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
        Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
        Math.floor((distance / 1000) % 60);

}, 1000);


// Tombol Next
document.getElementById("nextButton").addEventListener("click", function () {

    const now = new Date();

    if (now < targetDate) {
        alert("sabarr sayaaang belum waktune dibukak");
        return;
    }

    const password = document.getElementById("password").value;

    if (password === birthdayPassword) {
        window.location.href = "page2.html";
    } else {
        alert("Masa ga tau passwordnya sihh");
    }

});

function togglePassword() {
    const input = document.getElementById("password");

    input.type = input.type === "password" ? "text" : "password";
}
