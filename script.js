const title = "🎉 Happy Birthday Atchaya ❤️";
let i = 0;

function typeWriter() {
  if (i < title.length) {
    document.getElementById("typing").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = () => {
  typeWriter();
};

const photos = [
  "IMG-20260630-WA0005.jpg",
  "IMG-20260630-WA0006.jpg",
  "IMG-20260630-WA0010.jpg",
  "IMG-20260630-WA0015.jpg",
  "IMG-20260630-WA0016.jpg",
  "IMG-20260630-WA0053.jpg"
];

let current = 0;

function openGift() {
  document.getElementById("gift").style.display = "block";

  // Start slideshow
  setInterval(() => {
    current = (current + 1) % photos.length;
    document.getElementById("slide").src = photos[current];
  }, 2000);

  // Confetti animation
  if (typeof confetti === "function") {
    confetti({
      particleCount: 250,
      spread: 180,
      origin: { y: 0.6 }
    });
  }
}
