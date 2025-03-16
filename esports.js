document.addEventListener("DOMContentLoaded", function() {
    function startCountdown(elementId, targetDate) {
        let countdownElement = document.getElementById(elementId);
        
        function updateCountdown() {
            let now = new Date().getTime();
            let distance = targetDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.innerHTML = ${days}d ${hours}h ${minutes}m;

            if (distance < 0) {
                countdownElement.innerHTML = "Live Now!";
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 60000);
    }

    let tournament1Date = new Date("2025-06-15T00:00:00").getTime();
    let tournament2Date = new Date("2025-07-10T00:00:00").getTime();

    startCountdown("countdown1", tournament1Date);
    startCountdown("countdown2", tournament2Date);
});