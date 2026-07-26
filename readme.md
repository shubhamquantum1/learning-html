<!-- JavaScript Capstone Challenge: Interactive Web Portfolio  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
    📝 Project Description
    Take a static multi-page HTML/CSS website (consisting of a Homepage, About page, Hobbies list, Contact page, and a Survey Form) and connect it to a single external JavaScript file. Your goal is to add dynamic front-end behaviors: a global, persistent Dark/Light theme toggle switch, and a dynamic form submission processor that validates data and alters the user interface live on submit.


    🛠️ Project Requirements
    Task 1: Script Integration
    * Connect a single file named script.js to the <head> of all HTML files.
    * Ensure that the script does not block HTML rendering and only runs after the DOM is fully loaded.
    

    Task 2: Global Persistent Theme Toggle
    * Add a single button with the ID theme-btn inside the <header> or <nav> of every HTML page.
    * Create a Light Mode theme in your CSS using a class (e.g., body.light-theme) that overrides background colors and text colors.
    * In script.js, listen for a click on the theme button. When clicked, toggle the light-theme class on the <body> tag.
    * The Persistence Challenge: When a user navigates from one page to another, the browser resets. Make the theme selection persistent so that the website "remembers" if the user selected Light or Dark Mode across page refreshes and link clicks.
    

    Task 3: Survey Submission Processor (survey.html)
    * Bind a submit handler to the survey form.
    * The Anti-Reload Constraint: Prevent the browser from refreshing the page when the submit button is clicked.
    * Validate the form locally in JavaScript: if the Name, Email, or Password fields are empty, stop submission and display an error alert.
    * Dynamic UI Update: If the form is valid, read the user's Name and Role dropdown choice. Completely strip the form off the page and dynamically replace its container on the screen with a styled "Thank You/Success" card using JavaScript.
    
    💡 Developer Hints
    Hint for Task 1: Script Loading
        * Look up the difference between standard <script> tags and the defer attribute. defer ensures your script is loaded but only executed after the HTML document is fully parsed.
        
    Hint for Task 2: Persistence
        * To save data that survives page changes, research localStorage.
        * Use localStorage.setItem("key", "value") to store the active theme state.
        * Use localStorage.getItem("key") inside a load check at the top of your script to read the user's preference and apply the correct classes immediately when the page loads.
        
    Hint for Task 3: Intercepting Forms & Updating DOM
        * Forms trigger a "submit" event. Use event.preventDefault() inside your listener to stop the default browser reload action.
        * Use the .value property on input elements (e.g. document.querySelector("#name").value) to extract what the user typed.
        * To change the actual HTML code inside a card container, select the container and overwrite its .innerHTML property using a Template Literal backtick ( ` ) string.
-->