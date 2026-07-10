<!-- Level 2 — Topic 4: Shadows, Borders, & Hover Effects -->
<!-- ---------------------------------------------------- -->
<!-- 
    To make our website feel truly premium, we need to add details that give it depth. We do this using borders, rounded corners (border-radius), and shadows (box-shadow).
        1. Rounded Corners (border-radius) - By default, all boxes on the web have sharp, square edges. border-radius lets us round them off.
            border-radius: 8px; /* Smooth, modern corners */
            border-radius: 50%; /* Makes an element a perfect circle (if it has equal width & height) */
        
        2. Box Shadows (box-shadow) - Shadows create depth and make elements look like they are floating above the page.
            box-shadow: x-offset y-offset blur spread color;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
                        0px = Horizontal offset (shadow sits centered).
                        4px = Vertical offset (shadow is pushed 4px down).
                        12px = Blur radius (how soft the shadow is).
                        rgba(0, 0, 0, 0.3) = Black color with 30% opacity (transparent). Using transparent shadows is crucial to make them look realistic!
        
        3. Hover Effects (:hover) - A "pseudo-class" that allows you to style an element only when the user hovers their mouse cursor over it.
            .button:hover {
                background-color: white; /* Changes color on hover! */
            }
        
    Your Task: Let's turn your plain text navigation links into sleek, interactive dark buttons!
    1. Open your style.css file.
    2. Update your .nav-link rule to style it like a button:
        .nav-link {
            font-weight: bold;
            color: hsl(200, 80%, 75%);
            display: inline-block;
            margin-right: 20px;
            margin-bottom: 20px;
            
            /* Style it like a button: */
            background-color: hsl(220, 15%, 22%); /* Lighter grey than the body */
            padding: 8px 16px;                     /* Inside breathing room */
            border-radius: 8px;                    /* Rounded corners */
            border: 1px solid hsl(220, 15%, 32%);  /* Subtle border highlight */
            text-decoration: none;                 /* Removes the default link underline! */
        }
    3. Add a hover effect below it so the buttons light up when hovered:
        .nav-link:hover {
            background-color: hsl(220, 15%, 32%);  /* Turns lighter grey */
            color: hsl(190, 90%, 65%);             /* Text changes to cyan-blue */
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4); /* Glow shadow */
        }
    
    Save and refresh. Hover your mouse over the menu links!
-->