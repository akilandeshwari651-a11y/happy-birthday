const photos = [
    "IMG-20260630-WA0005.jpg",
    "IMG-20260630-WA0006.jpg",
    "IMG-20260630-WA0010.jpg",
    "IMG-20260630-WA0015.jpg",
    "IMG-20260630-WA0016.jpg",
    "IMG-20260630-WA0053.jpg"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % photos.length;
    document.getElementById("slide").src = photos[i];
}, 2500);

function showMessage() {
    document.getElementById("message").innerHTML =
    "🎉 Happy Birthday Atchaya ❤️<br><br>May your life be filled with happiness, love, success and endless smiles! 🥳";
}
