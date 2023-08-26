// Get references to the banner and button elements
const banner = document.getElementById('banner');
const changeButton = document.getElementById('changeButton');

// Define an array of background image URLs that you want to cycle through
const backgroundImageURLs = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
];

// Initialize an index to keep track of the current background image
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    // Increment the index to the next background image URL
    currentIndex = (currentIndex + 1) % backgroundImageURLs.length;

    // Set the background image URL
    banner.style.backgroundImage = `url(${backgroundImageURLs[currentIndex]})`;
}

// Add a click event listener to the button
changeButton.addEventListener('click', changeBackground);

// Function to change the background image automatically with a timer
function autoChangeBackground() {
    setInterval(changeBackground, 10000); // Change every 5 seconds (adjust as needed)
}

// Initial background image
changeBackground();

// Start auto-changing background images
autoChangeBackground();
