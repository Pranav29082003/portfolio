/**
 * typing.js
 * Handles the typing animation effect in the Hero section
 */

document.addEventListener("DOMContentLoaded", () => {
    // The target element where text will type out
    const typingElement = document.getElementById("typing-text");
    
    // Array of strings to cycle through (Tailor these to your skills!)
    const phrases = [
        "Data Analytics.",
        "SQL Querying.",
        "Python (EDA).",
        "Data Visualization.",
        "Power BI Dashboarding."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    
    // Speeds measured in milliseconds
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenPhrases = 2000; // Time the full text stays visible

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Remove a character
            typingElement.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
        } else {
            // Add a character
            typingElement.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
        }

        // Determine next animation step
        let currentDelay = isDeleting ? erasingSpeed : typingSpeed;

        // If phrase is completely typed out
        if (!isDeleting && characterIndex === currentPhrase.length) {
            currentDelay = delayBetweenPhrases; // Pause at the end of the phrase
            isDeleting = true;
        } 
        // If phrase is completely erased
        else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase, loop back to 0 at end
            currentDelay = 500; // Small pause before starting to type next word
        }

        setTimeout(type, currentDelay);
    }

    // Start the typing loop if the element exists on the page
    if (typingElement) {
        setTimeout(type, 1000); // 1-second initial delay when page loads
    }
});