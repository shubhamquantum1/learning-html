<!-- Level 3 — Topic 3: Strings, template literals and basic string operations-->
<!-- Mini-Project 5: The Study Tracker Dashboard -->
<!-- ------------------------------------------------------------------------ -->
<!-- 
        Strings are ordered sequence of characters represented by single, double quotes and backticks(also template literal as part of modern JS) [ordered sequence means it supports indexing as well as slicing]
    
        Template Literals:
        * Template string is modern way of representing a JS string using backticks(`)
        * Using template literals, we can add single quotes and double quotes in a string without using escape characters
        * Additionally, template literals also supports string interpolation meaning dynamically insertion of variables/value in a string using expression \`${…}\`
                strg_1 = `My name is "Anthony Gonsalv's"`
                console.log(strg_1);


                var a = 'Ram'
                var b = 'Shyam'
                var z = `${a} and ${b} are good boys`
                console.log(z);

        String Methods:
        1. Length of string	            
            .length	            strg.length	            “Shubham”.length
                    
        2. Case conversion	
            .toUpperCase()	Convert string into Uppercase 	“Shubham”.toUpperCase()
            .toLowerCase()	Convert string into Lowercase	“Shubham”.toLowerCase()
                    
        3. String Indexing	    strg[0]	            strg[index_position]	“Shubham”[0]
                    
        4. String slicing (extracting substring)	
            .slice(start, end)	Extract a substring	"Shubham".slice(0,4) → "Shub”
            .substring(start, end)	Similar to .slice() method but doesnot accept negative index	"Shubham".substring(0,4) → "Shub”
            .substr(start, length)	Extract substring of specified length	"Shubham Gupta".substr(8,5) → "Gupta”
                    
        5. Splitting and joining	
            .split(separator)	Splits string into array	"Hello world".split(" ") → ["Hello", "world"]
            .join(separator)	Joins array into a string	["Hello", "World"].join(" ") → "Hello World"
                    
        6. Modifying string	
            .replace("old", "new")	Replaces first occurrence	"Hello".replace("l", "x") → "Hexlo"
            .replaceAll("old", "new")	Replaces all occurrence	"Hello".replaceAll("l", "x") → "Hexxo"
            .concat(str1, str2)	Joins multiple strings	"Hello".concat(" ", "World") → "Hello World"
            .trim()	Remove whitespaces	" MVM ".ltrim() → "MVM   "
            .repeat(count)	return multiplied string value	
                    
        7. Searching in string	
            .indexOf("word")	Finds first occurrence	"Hello".indexOf("l") → 2
            .includes("word")	Checks if string contains substring	"Hello".includes("He") → true
            .search("pattern")	Returns index position of match 	"Hello".search("He") → 0
            .match("pattern")	Finds matches in a string	"The rain in SPAIN".match(/ain/g) → ["ain", "ain"]
            .startsWith("word")	Checks if string starts with value	"JavaScript".startsWith("Java") → true
            .endsWith("word")	Checks if string ends with value	"JavaScript".endsWith("Script") → true


        This is your solo challenge for Level 1. You will write the math and printing code yourself in script.js.

        Your Task:
        1. Open your script.js file and clear the existing code.
        2. Declare these exact variables at the top:
            * const studentName = "Shubham";
            * const weeklyGoal = 15; (Total hours you want to study this week)
            * const daysPlanned = 5; (Total days you plan to study this week)
            * let daysCompleted = 3; (Days you've studied so far)
            * let totalHoursStudied = 9.5; (Total hours you've actually studied so far)
        3. Write calculations to find:
            * Average Hours per Day: Divide totalHoursStudied by daysCompleted and store it in a variable named dailyAverage.
            * Hours Remaining: Subtract totalHoursStudied from weeklyGoal and store it in a variable named hoursLeft.
        4. Print the final results using a Template Literal (with backticks ` and ${}) so it outputs this exact message format in the browser console:
                Dashboard for Shubham:
                You have studied an average of X hours per day.
                You need to study Y more hours to reach your goal of 15 hours.
                (X and Y must be the calculated variables!)
        
        Save the file and refresh your browser.
-->