<!-- Level 1 — Topic 2: CSS Selectors -->
<!-- ----------------------------------- -->
<!-- 
    Tag Selectors - Targets every element on the page that matches that tag name.
                    CSS Syntax: p { color: red; } (makes all paragraphs red).

    Class Selectors - Target multiple elements that you want to style the same way. You define a class in HTML using the class attribute, and target it in CSS using a dot (.).
                    HTML: <p class="alert-text">Warning!</p>
                    CSS: .alert-text { color: orange; font-weight: bold; }
    
    ID Selectors - target one single, unique element on the page. You define it in HTML using the id attribute, and target it in CSS using a hash (#).
                    HTML: <footer id="site-footer">...</footer>
                    CSS: #site-footer { color: grey; }


    Your Task: Let's practice Class and ID selectors on your portfolio.html page.
    1. Open your HTML file and add a class and an ID:
        * To your three navigation links (<a> tags), add the class nav-link to all of them (e.g. <a href="portfolio.html" class="nav-link"> Home </a>).
        * To your <table> tag, add id="study-table" (e.g. <table border="1" id="study-table">).
    
    2. Open your style.css and add these rules:
        * Target the navigation links using the class selector (.nav-link) and make them bold:
            .nav-link {
                font-weight: bold;
            }
            
        * Target the table using the ID selector (#study-table) and change its background color to white:
            #study-table {
                background-color: white;
            }
    3. Save both files and refresh your browser!                    
-->