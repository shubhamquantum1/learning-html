<!-- Level 2 — Topic 2: Box-Sizing (The Layout Saver) -->
<!-- ---------------------------------------- -->
<!-- 
    Problem : By default, CSS calculates the size of an element like this: Total Width = width + left/right padding + left/right border
              So, if you make a box that is width: 300px and add 20px of padding on the sides, the browser actually renders it at 340px wide.
              This default behavior is a nightmare for developers because it makes calculating layouts extremely difficult. If you try to put two columns side-by-side at 50% width each, and you add even 1px of padding, they will expand past 100% and break, stacking on top of each other!

    Solution: box-sizing: border-box;
              If you set box-sizing: border-box;, it tells the browser: "Keep the width exactly what I set it to, and force the padding and borders to sit inside that width."
                    * If you set a box to 300px with 20px padding, the total width remains exactly 300px (the content area shrinks to 260px).
    
              The Universal CSS Reset (*)
                In modern web development, we use the Universal Selector (*) to apply border-box to every single element on the page automatically. We also use it to clear out default browser margins and paddings so we have 100% control over layout spacing.
                We place this reset rule at the very top of our CSS file:

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
    This is making content crowded then why CSS Resetting is a must for modern web development? This is because:
        * By default, every browser (Chrome, Safari, Edge) automatically adds random, hidden margins to <h1>, <p>, <ul>, and other tags. Because each browser adds different amounts of space, a website might look perfect in Chrome but broken in Safari.
        
        * By using margin: 0; padding: 0; at the top, we wiped the slate clean. Now, we have 100% control. The content is crowded because we haven't told the elements how much space they should have!                    



    Your Task:
    1. Open your style.css file.
    2. At the very top (just below your @import font rule, but above body), add the universal reset:
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    3. Because we reset the default page margins to 0, you will notice your content now hugs the very edge of the browser window. Let's fix that by adding padding directly to your body rule:
        body {
            background-color: hsl(220, 15%, 16%);
            font-family: 'Outfit', sans-serif;
            line-height: 1.6;
            
            /* Add padding to the body so the page content doesn't touch the screen edges: */
            padding: 40px; 
        }
    4. Save both files and refresh.
-->