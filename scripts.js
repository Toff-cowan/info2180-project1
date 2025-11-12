/* Add your JavaScript to this file */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the newsletter form
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.newsletter .message');
    
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const email = emailInput.value;         // Get the email address entered by the user
        // Display the success message
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        // Optional: Clear the input field after submission
        emailInput.value = '';
    });
});