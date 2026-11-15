
const birthdayWish = `
Happy Birthday, sayangkuuu 💗

Selamat bertambah usia sayaangkuu, Semoga di umur yang 
baru ini kamu selalu diberikan kesehatan, kebahagiaan, 
dan semua hal baik.

Semoga menjadi diri yang lebih sabarr, ga mudah marahh
marahhh dan semakin lebih dewasa jugaaa

Semoga semua impian keinginanmu bisa tercapai dan 
dilancarin semua urusanyaa

Makasihhh sudah hadir dalam hidupkuuu dan menjadi 
bagian terindah dalam hidupkuuu

I loveee youuu ♡
`;

let candleBlown = false;

function blowCandle() {
    if (candleBlown) return;

    candleBlown = true;

    document.getElementById("flame").style.display = "none";

    document.getElementById("instruction").classList.add("hidden");

    document.getElementById("wishText").innerText = birthdayWish;

    setTimeout(function () {
        document.getElementById("wish").classList.remove("hidden");
    }, 800);
}

function relightCandle() {
    candleBlown = false;

    document.getElementById("flame").style.display = "block";

    document.getElementById("wish").classList.add("hidden");

    document.getElementById("instruction").classList.remove("hidden");
}




