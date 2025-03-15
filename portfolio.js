
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-buttons");
    const items = document.querySelectorAll(".portfolio-item");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            items.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

