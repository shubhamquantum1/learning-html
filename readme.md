<!-- Level 2 — Topic 3: Selecting Elements (.getElementByTagName(), .querySelector())  -->
<!-- --------------------------------------------------------------------------------- -->
<!-- 
    Selecting an element is only half the battle. Once we grab an element using document.querySelector(), we can modify its content and appearance dynamically!
    - Changing Text (element.textContent)
    - Changing CSS Styles (element.style)


    Your Task: Let's use JS to dynamically hijack and re-style your main heading when the page loads!
    1. Open your script.js file.
    2. Type the following code:
        // 1. Select the title and Heading
        const mainHeading = document.querySelector("h1");



        // 2. Change the text content of the h1 tag
        mainHeading.textContent = "Shubham's Developer Hub";

        // 3. Changing CSS Styles (element.style)
        mainHeading.style.color = "hsl(150, 80%, 75%)";
        mainHeading.style.textShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
        mainHeading.style.fontSize = "36px";
        mainHeading.style.fontWeight = "bold";
        mainHeading.style.textDecoration = "underline";
        mainHeading.style.textAlign = "center";
        mainHeading.style.margin = "0 0 24px 0";
        mainHeading.style.padding = "0 0 36px 0";
    3. Save the file and refresh your browser on portfolio.html.
-->