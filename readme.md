<!-- Level 3 — Topic 2: Variables (const & let), rules and basic data types-->
<!-- ---------------------------------------------------- -->
<!-- 
        Variables are Containers for Storing Data. In JavaScript Variables can be declared in 4 ways:
        * Automatically
        * Using var
        * Using let
        * Using const
    
        WARNING - Do not use var! It is an obsolete keyword that has buggy memory-sharing rules. Modern standards dictate only using const and let.


        Rules for writing variables in javascript [note - In javascript variables are also called identifiers]
        * JS variables can start with letter, $ and underscore and can only contains Alphanumeric characters (A-Za-z0-9) and special character (_ and $) 
        * JS variables are case sensitive meaning x=10 and X=20 are different variables. 
        * JS variables are dynamically typed means variable type can be changed on the go. 

        JavaScript has mainly 7 primitive Datatypes and one non-primitive object data
        NNSSBBUO
        1. Null
        2. Number (int + float)
        3. Symbol
        4. String
        5. Boolean
        6. Bigint
        7. Undefined
        8. Object (non-primitive type)
        where as object data type can contain:
                1. An object
                2. An array
                3. A date

        // // 7 Datatypes:
        // let a = null;
        // let b = 10;
        // let c = Symbol('i am a symbol')
        // let d = 'shubham';
        // let e = true;
        // let f = BigInt('567');
        // let g = undefined;


        Your Task: Let's store some values and do some math in your script.js file!
        1. Open your script.js file and delete your connection log.
        2. Type the following code:
            // 1. Store your student details in constants
            const studentName = "Shubham";
            const weeklyGoalHours = 12;
        
            // 2. Store your progress in a let variable (since it will change!)
            let hoursCompleted = 8;
        
            // 3. Do some math to calculate remaining hours
            let hoursRemaining = weeklyGoalHours - hoursCompleted;
        
            // 4. Print a combined message to the console
            console.log("Welcome " + studentName + "! You have " + hoursRemaining + " hours left to reach your weekly goal.");
        
        3.Save the file and refresh your portfolio page in the browser.
        4. Check your browser console tab at the bottom right.
-->