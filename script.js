let currentIndex = 0;
const images = document.querySelectorAll('.galleryImage');
const totalImages = images.length;

function cycleImages() {
    images[currentIndex].style.opacity = '0'; // Hide the current image
    currentIndex = (currentIndex + 1) % totalImages; // Move to the next image, loop back to the first at the end
    images[currentIndex].style.opacity = '1'; // Show the next image
}

// Change image every 5 seconds
setInterval(cycleImages, 5000);
