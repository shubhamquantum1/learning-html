// <!-- Level 2 — Topic 1: Reusable Code with Functions-->
// <!-- ------------------------------------------------------------------------ -->
// <!-- Use function concept to print any student data

//Define the reusable function with parameters
function printStudyDashboard(studentName, weeklyGoalHours, daysPlanned, daysCompleted, totalHoursStudied) {
    
    // Calculations
    let hoursRemaining = weeklyGoalHours - totalHoursStudied;
    let avgHoursPerDay = totalHoursStudied / daysCompleted;

    // Print the template literal
    console.log(`Dashboard for ${studentName}:\n` +
                `You have studied an average of ${avgHoursPerDay.toFixed(2)} hours per day.\n` +
                `You need to study ${hoursRemaining} more hours to reach your goal of ${weeklyGoalHours} hours.\n` +
                `--------------------------------------\n\n`); // Divider line
}

// Now, CALL the function twice with different students!
printStudyDashboard("Shubham", 15, 5, 3, 9.5);
printStudyDashboard("Aditi", 20, 6, 4, 16.0);            