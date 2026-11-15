
function runAway() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".love-question");

    const maxX = container.clientWidth / 2 - button.offsetWidth / 2 - 10;
    const maxY = 100;

    button.style.position = "relative";
    button.style.left = (Math.random() * maxX * 2 - maxX) + "px";
    button.style.top = (Math.random() * maxY - maxY / 2) + "px";
}

function answerYes() {
    document.getElementById("loveMessage").innerText =
        "YEEYYY Aku juga sayang kamuuuu 💗🥰";

    document.getElementById("noButton").style.display = "none";

    document.getElementById("yesButton").innerText =
        "I LOVE YOU TOOO! 💞";

    document.getElementById("nextPage").classList.remove("hidden");

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerText = ["💗", "💕", "💖", "❤️"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 5000);
    }
}
