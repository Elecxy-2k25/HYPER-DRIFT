// Function to toggle chatbot visibility
function toggleChat() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = (chatContainer.style.display === "block") ? "none" : "block";
}

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
    document.getElementById("user-input").value = "";
}

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response-message").innerText = "Thank you! We will get back to you soon.";
});


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

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    let AnyComments = document.getElementById("AnyComments").value;

    let data = { Name: Name, Email: Email, AnyComments: AnyComments };

    fetch("https://script.google.com/macros/s/AKfycbxgJpgKADw009QyiWzbMvbnOnBoxDODB8CxaOh90t_NeVrlWATowIj0C1kroWy7xhGahQ/exec", {  // Replace with your Web App URL
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    })
    .then(response => response.text())
    .then(data => console.log("Response:", data))
    .catch(error => console.error("Fetch Error:", error));
});
