<!-- Level 3 — Topic 1: Connecting JavaScript (<script>) and using console.log-->
<!-- ---------------------------------------------------- -->
<!-- 
    To add logic to a webpage, we write JavaScript inside a separate .js file and link it to our HTML using the <script> tag.
        <script src="script.js" defer></script>

    * src="script.js": Specifies the path to the JavaScript file.
    * defer (Crucial Keyword): Tells the browser: "Download this script in the background, but do not run it until the entire HTML page structure is fully loaded."
        * Why this is important: If you run the script too early before the browser has loaded the HTML elements, your code will fail to find those elements and break. Always use defer!
    * Where it goes: We place it inside the <head> section of the HTML document.
    
    Your Task:
    1. Open your new learning-js/project 1 folder in your editor.
    2. Create JS file: script.js
    3. Open portfolio.html.
    4. Change <link rel="stylesheet" href="../project 1/style.css"> to <link rel="stylesheet" href="style.css">
    5. Below that stylesheet link, add your script link inside the <head>:
        >> <script src="script.js" defer></script>
    6. Open your script.js file and write your very first line of JavaScript and use console.log to display a message in the browser console:
        >> console.log('JAVASCRIPT is successfully connected. Inspect in browser console.')
    7. Refresh page and open console tab to see your success message.
-->