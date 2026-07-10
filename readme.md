<!-- Level 3 — Topic 2: Responsive Design & Media Queries -->
<!-- ---------------------------------------------------- -->
<!-- 
    Problem : Today, more than 50% of web traffic comes from mobile phones. If your website only looks good on a wide desktop screen, it's considered broken. Responsive Design means making your layout adapt dynamically to whatever screen size the user has.
              Previously, we used max-width: 450px; on your profile card. Because we used max-width instead of a fixed width: 450px, the card is already responsive! If a user opens it on a mobile screen that is 375px wide, the card will shrink to fit.

    Solution: But what if we want to change the layout entirely on small screens? For example, if a screen is too narrow, three horizontal buttons might get squished. We would want to stack them vertically instead.
    We do this using a Media Query:
    @media (max-width: 600px) {
        /* Any CSS rules written here will ONLY apply if the screen is 600px wide or narrower! */
        body {
            background-color: black; /* Test color */
        }
    }

    Your Task: Let's add responsive behavior to your navigation links so they stack vertically on mobile screens.
    1. Open your style.css file.
    2. At the very bottom of your file, add this Media Query block:
        @media (max-width: 600px) {
            /* 1. Reduce body padding so we don't waste screen space on mobile: */
            body {
                padding: 20px;
            }
            
            /* 2. Stack navigation links vertically instead of horizontally: */
            nav div {
                flex-direction: column;
                gap: 10px;
            }
            
            /* 3. Remove horizontal margins from links on mobile: */
            .nav-link {
                margin-right: 0;
                width: 100%;       /* Makes buttons take full mobile width */
                text-align: center;
            }
        }
    3. Save the file.
    4. Go to your browser. Grab the right edge of your browser window with your mouse and drag it to make the window narrower.
    5. When the window width goes below 600px, watch your buttons instantly stack vertically!
-->