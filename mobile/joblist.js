document.addEventListener('DOMContentLoaded', (event) => {
    // Get all job items on the page
    const jobItems = document.querySelectorAll('.job-item');

    // Iterate over each job item
    jobItems.forEach(item => {
        // Get the apply button within the current job item
        const applyButton = item.querySelector('a');

        // Add a click event listener to the apply button
        applyButton.addEventListener('click', function (event) {
            // Prevent the default action of the button (if it was a form submit or a link)
            event.preventDefault();

            // Change the button text to "Applied"
            this.textContent = 'Applied';

            // Optionally, disable the button to prevent further clicks
            this.style.backgroundColor = '#d3d3d3'; // Change to a disabled color
            this.style.cursor = 'not-allowed'; // Change the cursor to indicate it's disabled
            this.removeEventListener('click', arguments.callee); // Remove event listener after applying
        });
    });
});
