document.addEventListener("DOMContentLoaded", function () {
    const storedSelections = JSON.parse(localStorage.getItem("workoutSelections")) || {};

    function handleAddEvents() {
        const eventForm = document.getElementById("event-form");
        eventForm.style.display = "block";

        
        const addEventsButton = document.getElementById("add-events");
        const eventFormRect = eventForm.getBoundingClientRect();
        const buttonRect = addEventsButton.getBoundingClientRect();

        eventForm.style.top = buttonRect.bottom + "px";
        eventForm.style.left = (buttonRect.left + buttonRect.width / 2 - eventFormRect.width / 2) + "px";
    }

    function closePopup() {
        const eventForm = document.getElementById("event-form");
        eventForm.style.display = "none";
        const eventInput = document.getElementById("event-input");
        eventInput.value = "";
    }

    function handleSaveEvent() {
        const daySelect = document.getElementById("day-select");
        const selectedDay = daySelect.value;

        const eventInput = document.getElementById("event-input");
        const eventText = eventInput.value;

        const dayBox = document.getElementById(`${selectedDay}-box`);
        if (dayBox) {
            if (dayBox.textContent.trim() === "") {
                dayBox.textContent = eventText;
            } else {
                dayBox.innerHTML += "<br>" + eventText;
            }
        }

        closePopup(); // Close the pop-up menu after saving

        storedSelections[selectedDay] = dayBox.innerHTML;
        localStorage.setItem("workoutSelections", JSON.stringify(storedSelections));
    }

    const addEventsButton = document.getElementById("add-events");
    addEventsButton.addEventListener("click", handleAddEvents);

    const saveEventButton = document.getElementById("save-event");
    saveEventButton.addEventListener("click", handleSaveEvent);

    for (const day in storedSelections) {
        const dayBox = document.getElementById(`${day}-box`);
        if (dayBox) {
            dayBox.classList.add("box");
            dayBox.innerHTML = storedSelections[day];
        }
    }
});
