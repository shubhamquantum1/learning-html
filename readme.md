<!-- Level 3 — Topic 3: Transitions (Micro-animations) -->
<!-- ---------------------------------------------------- -->
<!-- 
    Problem : Right now, when you hover over your navigation buttons, the colors and shadows change instantly. In premium modern web design, we prefer things to feel smooth, fluid, and natural.

    Solution: We achieve this using the transition property, which controls how fast or slow a style change takes place.
                transition: property duration timing-function;
                transition: all 0.3s ease;
    
                * all: Apply the transition to all changing properties (background, text color, shadow, etc.).
                * 0.3s: The animation will take 0.3 seconds (300 milliseconds). This is the "sweet spot" for web animations—fast enough to feel responsive, but slow enough to be noticed.
                * ease: The motion starts slow, speeds up in the middle, and slows down at the end, making it feel very organic and natural.

    IMPORTANT: The Golden Rule of Transitions: Always put the transition property on the base selector (e.g., .nav-link), NOT on the hover selector (.nav-link:hover). 
               If you put it on the hover selector, the transition will only work when you hover on, but when you hover off, it will snap back instantly and look broken!


    Your Task: Let's make your button hover effects smooth and fluid!
    1. Open your style.css file.
    2. In your .nav-link rule (the base selector), add the transition:
        .nav-link {
            /* ... your existing properties ... */
    
            /* Add transition: */
            transition: all 0.3s ease;
        }
    3. Save and refresh. Hover over your buttons now!               
-->