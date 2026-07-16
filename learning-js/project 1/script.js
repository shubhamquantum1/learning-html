// <!-- Level 2 — Topic 2: Conditionals (If/Else)-->
// <!-- ------------------------------------------------------------------------ -->
// <!-- A conditional statement allows your code to change its behavior based on whether a condition is true or false.

//Define the reusable function with parameters
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