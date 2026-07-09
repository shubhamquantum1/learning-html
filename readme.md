<!-- Level 1 — Topic 3: CSS Color Systems (The HSL Secret) -->
<!-- ----------------------------------- -->
<!-- 
    There are three ways to define colors in CSS:
    1. Names: red, blue, lightgray (very limited).
    2. Hex Codes: #3b82f6 or #ff0000 (industry standard, but impossible to read or adjust without a color picker).
    3. HSL (Hue, Saturation, Lightness): The best system for developers. HSL is super intuitive because it behaves like mixing paint.
    
    How HSL Works: hsl(Hue, Saturation%, Lightness%)
    1. Hue (0 - 360): Think of a color wheel.
        * 0 is Red
        * 120 is Green
        * 240 is Blue
        * Any number in between blends them (e.g., 180 is Cyan, 300 is Magenta).
    2. Saturation (0% - 100%): How rich the color is.
        * 0% is completely grayscale (shade of gray).
        * 100% is full, vibrant color.
    3. Lightness (0% - 100%): How bright the color is.
        * 0% is pitch black.
        * 100% is pure white.
        * 50% is the "pure" color balance.
    
    Why HSL is a Developer's Superpower:
    If you want to make a color slightly darker for a button hover effect, you don't need a color picker. You just change the lightness number:
        Standard Blue: hsl(240, 100%, 50%)
        Darker Blue: hsl(240, 100%, 40%) (just lowered lightness by 10%!)


    Your Task: Let's transform your portfolio homepage into a modern, sleek dark-themed page using HSL!
    1. Open your style.css file.
    2. Replace your color keywords with these curated HSL values:
        * Body background-color: Set it to a dark slate background: hsl(220, 15%, 16%)
        * Paragraph text color: We need light text so it is readable on a dark background. Target p and set its color to: hsl(220, 15%, 85%)
        * Heading 1 and Heading 2 color: Target h1 and h2 and set their color to a vibrant cyan-blue: hsl(190, 90%, 65%)
        * Navigation links color: Target .nav-link and set color to a soft light blue: hsl(200, 80%, 75%)
        * Table background-color: Target #study-table and set it to a slightly lighter dark color than the body so it pops: hsl(220, 15%, 22%).
        * Table text color: Also add color: white; to #study-table so the text inside the table is readable.
    3. Save and refresh your page!        
-->