// 1. Fix details
const studentName = "Shubham";
const weeklyGoalHours = 15;          // (Total hours you want to study this week)
const daysPlanned = 5;               // (Total days you plan to study this week)


// 2. Varying detail
let daysCompleted = 3;          // (Days you've studied so far)
let totalHoursStudied = 9.5;    // (Total hours you've actually studied so far)

// 3. Calculation
let hoursRemaining = weeklyGoalHours - totalHoursStudied;
let avgHoursPerDay = totalHoursStudied / daysCompleted;

// 4. Display output in browser console
console.log(`Dashboard for ${studentName}:\n` +
            `You have studied an average of ${avgHoursPerDay.toFixed(2)} hours per day.\n` +
            `You need to study ${hoursRemaining} more hours to reach your goal of ${weeklyGoalHours} hours.`)