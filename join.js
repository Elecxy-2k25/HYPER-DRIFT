document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let position = document.getElementById("position").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || position === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your application for " + position + " has been submitted.");
    document.getElementById("joinForm").reset();
});