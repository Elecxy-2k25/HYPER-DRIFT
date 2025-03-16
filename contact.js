function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    let chatBox = document.getElementById("chat-box");

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate bot response
    let botMessage = document.createElement("p");
    botMessage.className = "bot-message";
    
    let response = getBotResponse(userInput);
    botMessage.textContent = response;
    
    // Display bot response
    setTimeout(() => {
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to latest message
    }, 500);

    // Clear input field
    document.getElementById("user-input").value = "";
}

// AI Bot Responses
function getBotResponse(input) {
    input = input.toLowerCase();
    
    const responses = {
        "hello": "Hello! How can I help you today?",
        "services": "We offer Live Streaming, Media Production, Digital Marketing, and Event Management.",
        "pricing": "Our pricing depends on the services required. Please contact us for a quote.",
        "contact": "You can reach us via email at contact@abcstudios.com or call us at +1 234-567-890.",
        "location": "We are located at 123 Business Street, New York, NY 10001.",
        "working hours": "Monday - Friday, 9:00 AM - 6:00 PM.",
        "appointment": "To schedule an appointment, visit our contact page or call us.",
        "default": "I'm sorry, I didn't understand that. Can you rephrase?"
    };

    return responses[input] || responses["default"];
}


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const scriptURL = "https://script.google.com/macros/s/AKfycbyHAgjzEFhVvBUZelzmbzdgnnK8xEqxxIc3-XJEYNWii6C8Z6W_GLVRIyhFbAwgyn2PCw/exec"; // Replace with your Web App URL

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
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
