
const memories = [
    {
		image: "assets/memories/foto4.jpeg",
        caption: "di lawuu aku jatuh cinta ke kamuuuu💗",
        position: "bottom",
        fit: "cover"
    },
    {
        image: "assets/memories/foto2.jpeg",
        caption: "Pertama kali kita PhotoBox ♡",
        position: "center",
        fit: "cover"
    },
    {
        image: "assets/memories/foto3.jpeg",
        caption: "Foto yang bikin orang orang tau kalo kamu milikkuuu",
        position: "bottom",
        fit: "cover"
    },
    {
        image: "assets/memories/foto5.jpeg",
        caption: "dijogjaaaaaa",
        position: "center",
        fit: "cover"
    },
    {
        image: "assets/memories/foto6.jpeg",
        caption: "bunganya cantikk kayak yang megang",
        position: "center",
        fit: "cover"
    }
];

let currentPhoto = 0;

// Menampilkan foto
function showPhoto() {
    const photo = document.getElementById("memoryPhoto");
    const caption = document.getElementById("photoCaption");
    const number = document.getElementById("photoNumber");

    const selectedPhoto = memories[currentPhoto];

    photo.style.opacity = 0;

    setTimeout(function () {
        photo.src = selectedPhoto.image;
        photo.style.objectFit = selectedPhoto.fit;
        photo.style.objectPosition = selectedPhoto.position;

        caption.innerText = selectedPhoto.caption;
        number.innerText = (currentPhoto + 1) + " / " + memories.length;

        photo.style.opacity = 1;
    }, 200);
}

// Foto berikutnya
function nextPhoto() {
    currentPhoto++;

    if (currentPhoto >= memories.length) {
        currentPhoto = 0;
    }

    showPhoto();
}

// Foto sebelumnya
function previousPhoto() {
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = memories.length - 1;
    }

    showPhoto();
}

// Tampilkan foto pertama saat halaman dibuka
showPhoto();
