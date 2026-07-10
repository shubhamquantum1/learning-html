<!-- Level 3 — Topic 1: Flexbox (The Layout Champion) -->
<!-- ---------------------------------------------------- -->
<!-- 
    Problem : Up until now, you've used margin and display hacks to align elements on your screen. But what if you want to align three boxes side-by-side? What if you want to center a vertical column of items?
    
    Solution : In modern web design, we do this using Flexbox (Flexible Box Layout). It is the most widely used layout tool in CSS.

    How Flexbox Works: Parents and Children
    To use Flexbox, you declare display: flex; on a parent container (e.g., a <div>, <nav>, or <main>).

    Once you make a parent container a Flexbox, all of its direct children automatically align themselves according to the parent's rules.

    Core Flexbox Properties (for the Parent Container):
    1. display: flex;: Activates Flexbox.
    2. flex-direction: Controls the direction of the items:
        * row (default): Lays children out horizontally in a line.
        * column: Lays children out vertically in a stack.
    3. justify-content: Aligns children along the direction of the row/column:
        * center: Bundles them in the middle.
        * space-between: Pushes them to the outer edges.
        * space-around: Puts equal space around all children.
    4. align-items: Aligns children in the opposite direction (e.g., centers them vertically if they are in a row).
        * center is the most common use to keep items aligned.
    5. gap: The spacing between the children. This is a lifesaver! Instead of adding manual margins to each link/button, gap defines the exact spacing between all items inside the container automatically.
    
    Your Task: Let's use Flexbox to align and space your navigation buttons!
    1. Open your style.css file.
    2. We want to target the <div> inside your <nav> tag. Create a selector for it:
        nav div {
            display: flex;             /* Activates Flexbox! */
            justify-content: center;   /* Centers the buttons horizontally */
            gap: 20px;                 /* Automatically spaces them 20px apart */
            margin-bottom: 20px;       /* Adds space below the navigation bar */
        }
    3. Because the gap property in the parent now handles the horizontal spacing, let's clean up your .nav-link rule:
        * Remove margin-right: 20px; from .nav-link.
        * Remove margin-bottom: 20px; from .nav-link (since we moved it to the parent container).
    4. Save and refresh your portfolio page.
-->