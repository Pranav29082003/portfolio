// Line 1: The script finds your form in index.html using id="contact-form"
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // This line blocks the default HTML browser page refresh

    const form = event.target;
    const data = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Changes the button text so the user knows the website is working
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // This is the delivery pipe that pushes the form entries to Formspree
    fetch('https://formspree.io/f/mzdlyyon', { 
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thanks for your message! I will get back to you shortly.');
            form.reset(); // Clears out the text boxes if the email sent successfully
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    })
    .catch(error => {
        alert('Oops! There was a network error. Please try again.');
    })
    .finally(() => {
        // Puts the button back to normal so it can be used again
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
}); // Line 37: The closing of the functional block