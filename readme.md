<!-- Level 1 — Topic 1: Connecting CSS to HTML -->
<!-- ----------------------------------------- -->
<!-- 
    CSS is a separate language from HTML. Its main job is to add visuals, styling and layout in web page. There are three ways to connect CSS to HTML, but External Stylesheets is the professional standard is the way to do so and is also the one, that we'll be using.
    
    <link> tag => It is primarily used to connect external CSS stylesheets & icons to HTML and is sits inside the <head> section of HTML file.

    It has two attributes; rel & href. while rel defines the relationship, the href contains css file path.
    For example :>
        <link rel="stylesheet" href="styles.css">
        <link rel="icon" href="favicon.ico">


    Understanding a CSS Rule => In a CSS file, we write rules. A rule looks like this:
        body {
            background-color: lightgray;
        }
        *   body (Selector): Tells the browser who to target. Here, we are targeting the entire page body.
        *   {} (Curly Braces): Contain all the styling instructions for that selector.
        *   background-color (Property): The feature we want to change.
        *   lightgray (Value): The new setting for that feature.
        *   ; (Semicolon): Crucial! Every single CSS statement must end with a semicolon, or the browser will get confused and ignore the styles below it.


    <link> vs <a> (Anchor Tag) :>
        <link>: Unclickable but used by the browser to load background files (like CSS or site icons).
        <a>: Used to create clickable hyperlinks that allow users to navigate between pages


    Your Task:
    1. In your code editor, Create a new folder learning-css/project 1 folder with listed files copied from learning-html folder
    2. Create a new file inside and name it exactly: style.css
    3. Open your portfolio.html file.
    4. Inside the <head> tags (just below the <title> tag), add the <link> tag to connect to your stylesheet:
        <link rel="stylesheet" href="style.css">
    5. Open your new style.css file and type the following rule exactly as you see it:
        body {
            background-color: lightgray;
            }

        h1 {
            color: black;
            text-align: center;
        }

        p {
            font-family: verdana;
            font-size: 12px;
        }
    6. Save both files, and open projects/project 4/portfolio.html in your web browser.
-->