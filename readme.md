<!-- Level 1 — Topic 4: Typography & Google Fonts -->
<!-- ----------------------------------- -->
<!-- 
    By default, browsers render text using "Times New Roman," which looks like an outdated newspaper and screams "1995 website." 
    Modern web design prefers clean sans-serif fonts (fonts without the tiny feet/ticks on the letters).
    Instead of relying on fonts installed on the user's computer, we can import beautiful, free web fonts directly from Google Fonts.

    1. Importing a Google Font
        We can import a font at the very top of our style.css file using the @import command. Let's use the premium modern font "Outfit":
        >> @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

    2. Typography Properties
        Once imported, we can style our text using these core properties:
            font-family: Sets the font. We specify fallbacks in case the internet connection fails:
                        font-family: 'Outfit', sans-serif;
            font-size: Sets the size. We will use pixels (px) for now.
            font-weight: Sets boldness. Can be normal, bold, or numbers (e.g. 300 is thin, 400 is normal, 700 is bold).
            line-height: Controls the space between lines of text. Standard text feels cramped; adding line-height: 1.6; makes paragraphs instantly readable and feel premium.

    Your Task:
        Let's give your portfolio page a typography upgrade!

        1. Open your style.css file.
        2. At the very first line of your file (above body), paste the Google Font import:
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        3. Update your CSS rules:
            Under body:
                Set font-family: 'Outfit', sans-serif;
                Add line-height: 1.6;
            Under h1:
                Set font-size: 36px;
                Set font-weight: 700;
            Add a new rule for h4:
                Set font-size: 24px;
                Set font-weight: 600;
            Under p:
                Remove font-family: verdana; (since the body now inherits 'Outfit').
                Set font-size: 16px;
            Save and refresh your page!
-->