<!-- 🃏 Mini-Project 4: Creating a Modern Profile Card -->
<!-- ---------------------------------------------------- -->
<!-- 
    Your Task:
    1. Open your about.html file.
    2. Connect it to style.css by adding the <link> tag in the <head> (just like you did for portfolio and recipe).
    3. Inside the <main> tag of about.html:
        * Directly above your <h2> Description: </h2>, add a profile image tag:
            <img src="https://picsum.photos/150" alt="Profile Picture" class="profile-pic">
        * Wrap your profile image, <h2> heading, and all paragraphs inside a single <div> tag with the class profile-card:
                <div class="profile-card">
                <img ...>
                <h2>Description:</h2>
                <p>...</p>
                ...
            </div>
    4. Open style.css and write the styling rules:
        Style the Card (.profile-card):
        * Give it a card-like width: max-width: 450px;
        * Give it inside breathing room: padding: 30px;
        * Set its background color to a slightly lighter grey than the body: background-color: hsl(220, 15%, 20%);
        * Give it rounded corners: border-radius: 16px;
        * Add a border highlight: border: 1px solid hsl(220, 15%, 28%);
        * Add a deep, soft floating shadow: box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
        * Center the card on the page: Set its margin to: margin: 40px auto; (This will automatically calculate the left and right margins to center the card perfectly on the screen!).
        
        Style the Profile Picture (.profile-pic):
        * Set its width and height to 100px.
        * Turn it into a perfect circle: border-radius: 50%;
        * Give it a solid border ring: border: 3px solid hsl(190, 90%, 65%);
        * Center the image inside the card and push the heading down slightly:
            display: block;
            margin: 0 auto 20px auto; /* 0 top, auto sides, 20px bottom */
-->