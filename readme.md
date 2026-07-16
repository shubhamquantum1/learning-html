<!-- Final CSS Capstone Project: The Premium Web Portfolio -->
<!-- ---------------------------------------------------- -->
<!-- 
    You will link all of your remaining HTML pages to your unified stylesheet and write styling rules that transform your raw HTML inputs and images into a sleek, premium, modern user interface.

    We are going to style your Hobbies Page, Contact Form, and Survey Form.

    Page-Specific Requirements:
    1. The Hobbies Page (hobbies.html) — Hover Zoom Effect
        * Connect the page to style.css.
        * In hobbies.html, add class="hobby-image" to your images.
        * In style.css, create the .hobby-image class:
            * Set their width (e.g. max-width: 400px;), give them rounded corners (border-radius: 12px;), and add a transition: transition: all 0.3s ease;.
            * Add a hover effect (.hobby-image:hover): Make the image grow slightly and glow when hovered using a CSS transform:
                    .hobby-image:hover {
                        transform: scale(1.03); /* Scales up by 3% */
                        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.4);
                    }
    2. The Forms (contact.html & survey.html) — Premium Inputs
        By default, browser forms and input fields look like plain white boxes. We want to style them to match our dark theme.

        * Connect both files to style.css.
        * In your HTML files, wrap the <form> inside a <div> with the class form-container (similar to what you did for the profile card!).
        * In style.css, write rules to style all inputs, selects, and textareas:
            * Style the Form Container (.form-container): Re-use the card styling (give it max-width: 500px;, margin: 40px auto;, padding, rounded corners, dark background, and drop shadow).
            * Style the Input Fields:
                input[type="text"], 
                input[type="email"], 
                input[type="password"], 
                select, 
                textarea {
                    width: 100%;                          /* Spans full width of card */
                    padding: 12px;                        /* Breathing room */
                    background-color: hsl(220, 15%, 24%); /* Slightly lighter than card */
                    border: 1px solid hsl(220, 15%, 34%);  /* Grey border */
                    border-radius: 8px;                   /* Rounded input corners */
                    color: white;                         /* Light text color */
                    font-family: inherit;                 /* Inherits "Outfit" */
                    margin-bottom: 20px;                  /* Spaces inputs vertically */
                    outline: none;                        /* Removes browser default highlight */
                    transition: border-color 0.3s ease;
                }

            * Focus Light-up Effect: Make the input border glow cyan when clicked/focused:
                input:focus, select:focus, textarea:focus {
                    border-color: hsl(190, 90%, 65%);
                }
            
            * Style the Submit Button: Target button[type="submit"] to make it look like a high-contrast action button:
                * Give it a cyan background (background-color: hsl(190, 90%, 65%);) and dark text color (color: hsl(220, 15%, 16%);).
                * Add padding, bold text, remove the border, and add rounded corners.
                * Add a hover transition that makes it glow cyan!     
-->