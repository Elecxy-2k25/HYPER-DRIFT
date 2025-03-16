document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    const formData = { name, email, message };

    const scriptURL = "https://script.google.com/macros/s/AKfycbwCectGHU6czbww1LLexVmyUQkhSui01yaR4UPIMNUtOnc_83gY6iuD26HZzkWTeBMzbA/exec"; // Replace with your actual Google Apps Script URL

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();
        if (result.result === "success") {
            alert("Form submitted successfully!");
        } else {
            alert("Error submitting form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error connecting to the server.");
    }
});
