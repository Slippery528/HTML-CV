// JavaScript for carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

// Function to hide all images except the one at the specified index
function hideAllImagesExcept(index) {
  images.forEach((image, i) => {
    if (i !== index) {
      image.style.display = "none";
    } else {
      image.style.display = "block";
    }
  });
}

// Function to show the next image in the carousel
function showNextImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

// Hide all images except the first one initially
hideAllImagesExcept(0);

// Set interval to automatically change images every 5 seconds
setInterval(showNextImage, 5000);
