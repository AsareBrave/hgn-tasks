document.addEventListener("DOMContentLoaded", function () {
    // Function to get the current day of the week
    function getCurrentDayOfTheWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return daysOfWeek[dayIndex];
    }

    // Function to get the current UTC time
    function getCurrentUTCTime() {
        const currentDate = new Date();
        return currentDate.toUTCString();
    }

    // Update the HTML elements with the data-testid attributes
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfTheWeek();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
});
