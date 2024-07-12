// Function to remove the container with the specified class and text content
function removeReelsAndShorts() {
    // Select all divs with the class 'x1lliihq'
    const containers = document.querySelectorAll('div.x1lliihq');

    // Loop through the selected elements to find the one with the specific text
    containers.forEach(container => {
        if (container.textContent.includes("Reels and short videos") || container.textContent.includes("Rolki i krótkie filmy")) {
            container.remove();
            console.log('Removed "Reels and short videos" container');
        }
    });
}

// Observe changes to the DOM and attempt to remove the container when it appears
const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        removeReelsAndShorts();
    });
});

// Configuration of the observer
const config = {
    childList: true,
    subtree: true
};

// Start observing the body for changes
observer.observe(document.body, config);

// Initial removal in case the container is already present
removeReelsAndShorts();