document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbyNYrLHdk5GdpOnpDgNsod5_d_FLHf7dsttGnKT0ooHzmZ3PPlxflAPoSwKt8ZmbI-wtQ/exec"; // Replace with your Web App URL

    let formData = {
        Name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        Message: document.getElementById("Any Comments").value
    };

    fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response-message").innerText = "Message Sent Successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch(error => {
        document.getElementById("response-message").innerText = "Error sending message!";
        console.error("Error:", error);
    });
});
