// function customizePage() {
//     // 1. Select the main heading
//     const mainHeading = document.querySelector("h1");
    
//     // 2. Change text and styles
//     const btn = document.getElementById("theme-btn");
//     const pageBody = document.querySelector("body");
//     const pageMain = document.querySelectorAll("main p, main div");
//     console.log(pageMain.color);
    
//     if(btn.textContent === "Light Mode") {
//         mainHeading.textContent = "Shubham's Customized Hub!";
//         mainHeading.style.color = "hsla(190, 86%, 26%, 0.75)";
//         mainHeading.style.textShadow = "0px 0px 12px rgba(150, 145, 245, 0.6)";
//         mainHeading.style.textDecoration = "underline";

//         pageBody.style.backgroundColor = "hsl(0, 0%, 100%)";
//         pageBody.style.color = "black";
//         pageMain.forEach(x => {x.style.color = "black"});
//         btn.textContent = "Dark Mode";        
//     } else {
//         mainHeading.textContent = "Shubham's Customized Hub!";
//         mainHeading.style.color = "hsl(150, 80%, 75%)";
//         mainHeading.style.textShadow = "0px 0px 12px rgba(0, 255, 150, 0.6)";
//         mainHeading.style.textDecoration = "underline";

//         pageBody.style.backgroundColor = "hsl(220, 25%, 10%)";
//         pageBody.style.color = "white";
//         pageMain.forEach(x => {x.style.color = "white"});
//         btn.textContent = "Light Mode";        
//     }
// }




const btn = document.querySelector("#theme-btn");
const pageBody = document.querySelector("body");
const mainHeading = document.querySelector("h1");
const savedTheme = localStorage.getItem("theme");


// 1. On page load, restore the previously chosen theme ONLY if it exists in localStorage
if (savedTheme === "light-mode") {
    pageBody.classList.add("light-mode");
    mainHeading.textContent = "Shubham's Customized Hub!";
    if (btn) btn.textContent = "Dark Mode";

} else if (savedTheme === "dark-mode") {
    pageBody.classList.add("dark-mode");
    mainHeading.textContent = "Shubham's Customized Hub!";
    btn.textContent = "Light Mode";
}


// 2. Add event listener to toggle and SAVE the choice
if (btn) {
    btn.addEventListener("click", function () {
    const currentHeading = document.querySelector("h1");
    currentHeading.textContent = "Shubham's Customized Hub!";

    if (btn.textContent === "Light Mode") {
        // Switch to Light Mode styling
        pageBody.classList.remove("dark-mode");
        pageBody.classList.add("light-mode");
        btn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light-mode");
    } else {
        // Switch to Dark Mode styling
        pageBody.classList.remove("light-mode");
        pageBody.classList.add("dark-mode");
        btn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark-mode");
    }
});
}





// Select the contact form
const contactForm = document.querySelector("#contact-form");

// Add an event listener ONLY if a form exists on the current page
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page from refreshing!

    // Read the input values
    const nameValue = document.querySelector("#name").value;
    const emailValue = document.querySelector("#email").value;

    // Check if fields are empty
    if (nameValue === "" || emailValue === "") {
      alert("❌ Error: Please fill in all fields before submitting!");
    } else {
        console.log(nameValue);
        console.log(emailValue);
        alert(`✅ Success! Thank you ${nameValue}, your message has been received.`);
    }
  });
}




const surveyForm = document.querySelector("#survey-form");

if (surveyForm) {
    surveyForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nameVal = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const pwd = document.querySelector("#pwd").value;
        const roleVal = document.querySelector("#drpdw").value;
        if (nameVal === "" || email === "" || pwd === "") {
            alert("❌ Error: Please fill in all fields before submitting!");
            return;
        }

        // Replace the form inside the card with a dynamic success message!
        const formCard = document.querySelector(".form-container");
        formCard.innerHTML = `
            <h2 style="color: hsl(150, 80%, 75%); text-align: center;">🎉 Survey Submitted!</h2>
            <p style="text-align: center; margin-top: 15px;">Thank you <strong>${nameVal}</strong> for completing the survey as a <strong>${roleVal}</strong>.</p>
        `;
    });
}