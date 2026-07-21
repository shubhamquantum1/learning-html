<!-- Level 3 — Topic 3: Form Values & Validation (input.value and preventDefault)  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
    Now, let's learn how to make user forms interactive! To read user input and handle submissions in JavaScript, we need two fundamental tools:

    1. Extracting Text from Inputs (.value): To get whatever the user typed inside a text box, we read its .value property:
        >> const nameInput = document.querySelector("#name");
        >> console.log(nameInput.value); // Prints whatever the user typed!
    
    2. Stopping Page Reloads (e.preventDefault()) : By default, when a user submits a form, the browser reloads the page. This wipes out your JavaScript memory and resets the screen!. To prevent the page from reloading so we can process the input in JavaScript, we listen for the "submit" event on the <form> tag and call e.preventDefault():
        >> const form = document.querySelector("form");
        >> form.addEventListener("submit", function(event) {
        >> event.preventDefault(); // STOPS the browser from reloading the page!
        >> // Now we can validate the inputs using JS:
        const userName = document.querySelector("#name").value;
        if (userName === "") {
            alert("Please fill out your name!");
        }
        });
    
    Your Task: Let's add interactive submission validation to your contact.html page!
    1. Open `contact.html`
    2. Inside its <head> tag, add the script link:
        <script src="script.js" defer></script>
    3. Open script.js and add this form validation logic at the bottom of your file:
        // Select the contact form
        const contactForm = document.querySelector("form");
        // Add an event listener ONLY if a form exists on the current page
        if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop page from refreshing!
            // Read the input values
            const nameValue = document.querySelector("#name").value;
            const emailValue = document.querySelector("#email").value;
            // Check if fields are empty
            if (nameValue === "" || emailValue === "") {
            alert("❌ Error: Please fill in all fields before submitting!");
            } else {
            alert(`✅ Success! Thank you ${nameValue}, your message has been received.`);
            }
        });
        }
    4. Save the files and open contact.html in your browser.
    5. Try clicking "Send Message" with empty fields (it should show an error without reloading!).
    6. Type your name and email, then click "Send Message" (it should show a personalized success pop-up!).
-->