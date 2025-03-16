document.addEventListener("DOMContentLoaded", function () {
    let serviceCards = document.querySelectorAll(".service-card");
    
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";  // Ensure visibility
            card.style.transform = "translateY(0)"; 
        }, index * 200);
    });
});
