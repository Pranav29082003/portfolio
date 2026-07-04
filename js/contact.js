/**
 * Contact Form Handler
 * Tied to #contact-form in index.html
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Core event handler for processing form submission
 * @param {Event} event - Form submission event
 */
function handleFormSubmit(event) {
    // 1. Prevent default page reload
    event.preventDefault();

    // 2. Fetch DOM elements inside the form scope
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // 3. Extract user data safely
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 4. Basic Client-side Validation (Fallback)
    if (!name || !email || !message) {
        alert('Please fill out all required fields before sending.');
        return;
    }

    // 5. Update UI feedback during transmission
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending Message...';
    submitBtn.disabled = true;

    // 6. Assemble the payload
    const formData = {
        senderName: name,
        senderEmail: email,
        senderMessage: message,
        timestamp: new Date().toISOString()
    };

    // 💡 Simulated API Network Request
    // Substitute this setTimeout code with your actual endpoint fetch request (e.g., Formspree/EmailJS API)
    setTimeout(() => {
        try {
            console.log('Successfully captured form data payload:', formData);
            
            // Success State UI Reset
            alert(`Thanks for reaching out, ${name}! Your simulated message went through successfully.`);
            form.reset();
            
        } catch (error) {
            console.error('Submission tracking failed:', error);
            alert('Something went wrong. Please check your data or try again later.');
        } finally {
            // Re-enable button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    }, 1500); 
}