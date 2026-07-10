<!-- Level 2 — Topic 3: Display Properties (block, inline, inline-block) -->
<!-- ------------------------------------------------------------------- -->
<!-- 
    Since, we have done CSS reset in previous topic, now html page is in our control. 
    we can use, padding and margin properties in css to manage everything.

    In CSS, every element has a display property that dictates how it behaves:

    1. display: block (e.g. <h1>, <p>, <div>)
        * Starts on a new line.
        * Takes up the full width of the screen.
        * Fully espects all padding and margins.
    2. display: inline (e.g. <a>, <span>)
        * Does NOT start on a new line (flows next to other inline elements).
        * Only takes up as much width as its content.
        * ⚠️ Crucial Limit: Inline elements ignore vertical margins and padding.
    3. display: inline-block (The Hybrid)
        * Does NOT start on a new line (sits next to other elements).
        * But behaves like a block: fully respects all margins, padding, width, and height!
    
    Your navigation links (<a>) are currently inline. Because they are inline, they ignore vertical margins and crowd together. If we change them to inline-block, we can space them out beautifully.
    
    Your Task:
    1. Open your portfolio.html file.
    2. In the navigation section, delete the <br> tags between your home, about, and hobbies links. We don't need HTML line breaks anymore; we will use CSS to control their layout!
    3. Open your style.css file and add the following spacing rules:
       * Add space below headings and paragraphs:
            h1 {
                margin-bottom: 24px;
            }
            p {
                margin-bottom: 36px;
            }

       * Add space and indent lists:
            ul {
                margin-bottom: 24px;
                margin-left: 24px; /* Restores the indentation for the bullet points */
            }
            li {
                margin-bottom: 2px; /* Adds breathing room between list items */
            }

        * Style your navigation links by changing their display type:
            /* Centering navigation bar */
            .nav {
                display: flex;
                justify-content: center; /* Centers items horizontally */
                gap: 40px;              /* Adds clean space between links */
                margin-bottom: 60px;  /*Adds space below the navigation bar */
            }

            /* Changed .nav-link class color to soft-light-blue using HSL*/
            .nav-link {
                font-weight: bold;
                color: hsl(200, 80%, 50%);

                /* Change display to hybrid block, and add spacing: */
                display: inline-block;
                margin-left:30px;
                margin-right: 20px;   /* Pushes links away from each other horizontally */
                margin-top: 10px;    /* Adds space above the navigation bar */
            }
-->