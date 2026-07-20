<!-- 🎨 Mini-Project 6: The Interactive Theme Switcher  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
    Create a theme-switching webpage where clicking a single button alters the entire look of the page. The background, heading styles, text content, and individual paragraph/div elements must adapt dynamically, and the button text must toggle appropriately.


    Requirements:
    1. HTML Elements:
        * Add a <button> with an ID of theme-btn that triggers a JavaScript function when clicked.
    
    2. Light Mode (When page text says "Light Mode"):
        * Change heading text to "Shubham's Customized Hub!".
        * Apply an underline, a soft shadow, and a dark teal/blue color to the <h1>.
        * Set the <body> background to white.
        * Turn all <p> and <div> tags inside <main> to black.
        * Change the button text to "Dark Mode".
    
    3. Dark Mode (When page text says "Dark Mode"):
        * Keep heading text as "Shubham's Customized Hub!".
        * Apply an underline, a bright green glow shadow, and a light green color to the <h1>.
        * Set the <body> background to a dark navy blue.
        * Turn <p> tags inside <main> to white.
        * Turn <div> tags inside <main> to #f0e7e7aa.
        * Change the button text to "Light Mode"

    💡 Hints for Writing the JavaScript:
        * Hint 1 (The Trigger): Use the button's current text condition (btn.textContent === "Light Mode") as your primary if statement condition to decide whether you are switching into Light Mode or Dark Mode.
        
        * Hint 2 (Targeting main elements): Since explicit color rules like p { color: ... } and h1 { color: ... } defined in your CSS, they override the color inherited from the body tag due to CSS specificity. Hence, you might need to use querySelectorAll("main p, main div") to target all <p> and <div> tags inside <main>. Remember that document.querySelectorAll() returns a NodeList (a collection of elements). You cannot style it directly using brackets like pageMain[div] or properties like pageMain.color. You must address the individual elements inside it using loops. Loop through them and change their color based on the current theme.
        
        * Hint 3 (Text Decorations & Shadows):
            * For underlines: .style.textDecoration = "underline"
            * For glows: .style.textShadow = "0px 0px 12px rgba(...)"
-->