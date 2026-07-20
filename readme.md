<!-- Level 2 — Topic 3: Selecting Elements (.getElementByTagName(), .querySelector())  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
        1. - **DOM** is a **tree-like structure** of a webpage or HTML document. Each part of the page - like <html>, <head>, <body>, <div>, <p>, href, texts… - are nodes/branches of a tree.
        2. When a web page loads, the browser creates a tree-like representation(DOM) of the HTML document internally. JavaScript then “talks” to this tree to make the page interactive — for example, showing a popup when you click a button.

        | Level      | Example        | Description                  |
        | -----------------------------------------------------------|
        | Document   | **HTML document**.| owner of all nodes        |
        | Root       | `<html>`         | The top-level container    |
        | Parent     | `<body>`         | Holds visible content      |
        | Child      | `<div>`, `<p>`   | Elements inside the body   |
        | Leaf       | Text nodes       | Actual text inside tags    |
                    
        | Method                                    | Description                          |
        | ---------------------------------------------------------------------------------|
        | document.getElementById(*id*)             | Find an element by element id      |
        | document.getElementsByTagName(*name*)     | Find elements by tag name          |
        | document.getElementsByClassName(*name*)   | Find elements by class name        |
        | document.querySelector(*selector*)        | Find the first element that matches a CSS selector |
        | document.querySelectorAll(*selector*)     | Find all elements that match a CSS selector |


        Your Task: Let's select the main heading of your portfolio page and print it in the console.
        1. Open your script.js file.
        2. Comment out or delete your previous function definitions and calls (so our console stays clean!).
        3. Type the following code:
            // 1. Select the title and Heading
            const title = document.getElementsByTagName("title");
            const mainHeading = document.querySelector("h1");

            // 2. Print the actual element to the browser console
            console.log(title[0].textContent);
            console.log(mainHeading.textContent);
        4. Save the file and refresh your browser on portfolio.html.
        5. Check your browser console.
        You should see the title and line Welcome to my portfolio website print out directly inside your console!
-->