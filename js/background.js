const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bg = document.querySelector("body");

bg.style.backgroundImage= `url(img/${chosenImage})`;