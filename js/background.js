const images = ["0.jpg", "1.webp", "2.jpg"];

const displayImg = images[Math.floor(Math.random() * images.length)];
console.log(displayImg);

const bgImage = document.createElement("img");

bgImage.src = `img/${displayImg}`;

document.body.appendChild(bgImage);
