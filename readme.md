<!-- Level 2 — Topic 2: Conditional (If/Else)-->
<!-- ------------------------------------------------------------------------ -->
<!-- 
        1. An expression is a block of code that evaluates to a single value is called expression. For example, x=20 is an expression.
        2. Statement on the other hand is any block of code that is performing some action and can be said as superset of expression

        var age = 21
        if (age>=9 && age <18){
            console.log('You are not there yet')
        }
        else if (age>=18){
            console.log('You have a valid age and you can vote');
        }
        else{
            console.log('Please provide a valid age');
        }
                    
        
        Your Task:
        Modify previous code printStudyDashboard function so it congratulates students who have met their goals!

        1. Open your script.js file and clear the existing code.
        2. Edit the function body to include an if/else check:

            function printStudyDashboard(studentName, weeklyGoalHours, daysPlanned, daysCompleted, totalHoursStudied) {
    
            // Calculations
            let hoursRemaining = weeklyGoalHours - totalHoursStudied;
            let avgHoursPerDay = totalHoursStudied / daysCompleted;

            // Print the template literal
            if(hoursRemaining <= 0){
                console.log(`Dashboard for ${studentName}:\n` + 
                            `Congratulations! You have reached your goal!\n` + 
                            `--------------------------------------\n\n`); // Divider line
            } else {
            console.log(`Dashboard for ${studentName}:\n` + 
                        `You have studied an average of ${avgHoursPerDay.toFixed(2)} hours per day.\n` +
                        `You need to study ${hoursRemaining} more hours to reach your goal of ${weeklyGoalHours} hours.\n` +
                        `--------------------------------------\n\n`); // Divider line
                }
            }

        // Now, CALL the function twice with different students!
        printStudyDashboard("Shubham", 15, 5, 3, 9.5);   // Should run the "else" block
        printStudyDashboard("Aditi", 20, 6, 4, 22.0);    // Should run the "if" block (met goal!) 
        
        4. Save the file and refresh your browser.
-->