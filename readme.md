<!-- Level 2 — Topic 1: The CSS Box Model -->
<!-- ---------------------------------------- -->
<!-- 
    Single Most important concept in all of CSS. If you master the Box Model, you master layouts.
    
    Every element on a web page is treated by the browser as a rectangular box. The Box Model has 4 layers, from the inside out:
    1. Content: The actual text, text elements, or image inside the tag.
    2. Padding: The invisible breathing room inside the element's border. (Separates the text from its border).
    3. Border: The outline wrapping around the padding and content.
    4. Margin: The invisible space outside the border. (Separates this element from other neighboring elements).
    
    The "Framed Painting" Analogy:
    * Content = The painting itself.
    * Padding = The white cardboard matting inside the frame.
    * Border = The wooden frame.
    * Margin = The empty wall space between this frame and other paintings on the wall.

    Your Task: Let's apply the Box Model to your study table in portfolio.html to see it in action. Modify your style.css file's #study-table rule by adding padding and margin:
        #study-table {
            background-color: hsl(220, 15%, 22%);
            color: white;
            
            /* New Box Model Properties: */
            padding: 20px;       /* Adds space inside the table border */
            margin-top: 30px;    /* Pushes the footer 30px away from the bottom of the table */
            margin-bottom: 30px; /* Pushes other items away */
        }
    Save and refresh your portfolio page.
-->