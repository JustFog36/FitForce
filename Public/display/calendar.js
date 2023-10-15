document.addEventListener("DOMContentLoaded", function () {
    const storedSelections = JSON.parse(localStorage.getItem("workoutSelections")) || {};

    function handleAddEvents() {
        const eventForm = document.getElementById("event-form");
        eventForm.style.display = "block";
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
                // Add a line break between events
                dayBox.innerHTML += "<br>" + eventText;
            }
        }

        const eventForm = document.getElementById("event-form");
        eventForm.style.display = "none";
        eventInput.value = "";

        // Store events with line breaks in local storage
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
            // Set the innerHTML to restore line breaks
            dayBox.innerHTML = storedSelections[day];
        }
    }
});
