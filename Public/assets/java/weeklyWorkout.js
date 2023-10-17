document.addEventListener("DOMContentLoaded", function () {
    const dayElements = document.querySelectorAll(".day");
    const currentDate = new Date();

    function updateDisplay() {
        dayElements.forEach(function (dayElement) {
            const dayName = dayElement.querySelector("h3").textContent;
            const selectedWorkout = dayElement.querySelector("input[type='radio']:checked");
            const dayDate = new Date(currentDate);
            dayDate.setDate(currentDate.getDate() + Array.from(dayElements).indexOf(dayElement));

            if (selectedWorkout) {
                const workoutDisplay = `${dayName}: ${selectedWorkout.value}`;
                dayElement.querySelector(".workout-display").textContent = workoutDisplay;
            }

            const formattedDate = dayDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            dayElement.querySelector(".day-date").textContent = formattedDate;
        });
    }

    dayElements.forEach(function (dayElement) {
        const radioButtons = dayElement.querySelectorAll("input[type='radio']");
        radioButtons.forEach(function (radioButton) {
            radioButton.addEventListener("change", updateDisplay);
        });
    });

    // Store workout selections in Local Storage when the page loads
    const workoutSelections = {};
    dayElements.forEach(function (dayElement) {
        const dayName = dayElement.querySelector("h3").textContent;
        const selectedWorkout = dayElement.querySelector("input[type='radio']:checked");
        if (selectedWorkout) {
            workoutSelections[dayName.toLowerCase()] = selectedWorkout.value;
        }
    });
    localStorage.setItem("workoutSelections", JSON.stringify(workoutSelections));

    updateDisplay();

    const submitButton = document.getElementById("submit-workouts");
    submitButton.addEventListener("click", function () {
        // Create an object to store workout selections
        const workoutSelections = {};

        dayElements.forEach(function (dayElement) {
            const dayName = dayElement.querySelector("h3").textContent;
            const selectedWorkout = dayElement.querySelector("input[type='radio']:checked");
            if (selectedWorkout) {
                workoutSelections[dayName.toLowerCase()] = selectedWorkout.value;
            }
        });

        localStorage.setItem("workoutSelections", JSON.stringify(workoutSelections));

        location.href = "./calendar.html";
    });
});

