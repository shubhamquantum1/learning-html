<!-- Level 3 - Topic 1&2 — Advanced JavaScript (Event Listeners and Class Toggling)  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
    Topic 1: Event Listeners (addEventListener) => In HTML, writing onclick="customizePage()" inside the tag is called an inline event. While it works, modern web standards dictate keeping HTML strictly for structure and putting all click handlers inside script.js. We do this using addEventListener:
        >> const btn = document.querySelector("#theme-btn");
        >> btn.addEventListener("click", customizePage);      // Listens for a click on the button and runs a function:

    Topic 2: Class Toggling (classList.toggle)  => In your script.js, you manually changed 8 different .style properties (style.backgroundColor, style.color, style.textShadow, .forEach(...)). Instead of writing 15 lines of JavaScript to change individual inline styles, the industry standard is to define a class in CSS and use JavaScript to turn that class on or off with one line:
        >> document.body.classList.toggle("light-theme");    // Toggles the 'light-theme' class on and off the <body> tag!


    Your Task: Let's refactor your Light/Dark Mode toggle to use addEventListener and classList.toggle!
    1. Clean up portfolio.html: Remove onclick="customizePage()" from your <button> tag so the HTML stays 100% clean.
    2. Add a Light Theme class in style.css: At the bottom of your style.css, add these rules:
        /* Dynamic Light Mode Themes using Event Listeners and Class Toggling. */
        /* ------------------------------------------------------------------------------- */
        1. Body backgrounds and root text overrides
        body.light-mode {
            background-color: hsl(0, 0%, 100%) !important;
            color: black !important;
        }
        2. Heading updates for Light Mode
        body.light-mode h1 {
            color: hsla(190, 86%, 26%, 0.75) !important;
            text-shadow: 0px 0px 12px rgba(150, 145, 245, 0.6) !important;
            text-decoration: underline !important;
        }

        3. Targets specific inner block structures inside main
        body.light-mode main p,
        body.light-mode main div {
            color: black !important;
        }

        /* --- Dynamic Dark Mode Themes --- */
        /* 1. Body backgrounds and root text overrides */
        body.dark-mode {
            background-color: hsl(220, 25%, 10%) !important;
            color: white !important;
        }
        body.dark-mode h1 {
            color: hsl(150, 80%, 75%) !important;
            text-shadow: 0px 0px 12px rgba(0, 255, 150, 0.6) !important;
            text-decoration: underline !important;
        }
        body.dark-mode main p {
            color: white !important;
        }
        body.dark-mode main div {
            color: #f0e7e7aa !important;
        }

    3. Refactor script.js:Replace your script.js contents with this clean Event Listener:
       const btn = document.querySelector("#theme-btn");
        
        btn.addEventListener("click", function() {
        const mainHeading = document.querySelector("h1");
        const pageBody = document.querySelector("body");

        mainHeading.textContent = "Shubham's Customized Hub!";   // Always enforce the heading text value across states

        if (btn.textContent === "Light Mode") {
            // Switch to Light Mode styling
            pageBody.classList.remove("dark-mode");
            pageBody.classList.add("light-mode");
            
            btn.textContent = "Dark Mode";        
        } else {
            // Switch to Dark Mode styling
            pageBody.classList.remove("light-mode");
            pageBody.classList.add("dark-mode");
            
            btn.textContent = "Light Mode";        
        }
        });


    4. Save all files and test your button in the browser!

-->