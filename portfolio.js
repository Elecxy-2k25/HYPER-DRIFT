import React, { useState } from "react";

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-btn");
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


const Portfolio = () => {
    const [selectedVideo, setSelectedVideo] = useState(null); // State for selected video

    const portfolioItems = [
        { category: "live", title: "Concert Live Streaming", image: "/material/nissan_180x1.jpg", video: "https://youtu.be/A0zpF1c3aVA?si=Sy-ebyUmMcoTjbZh" },
        { category: "live", title: "Esports Tournament Broadcast", image: "/images/live-stream2.jpg", video: "https://www.youtube.com/embed/your-video-id2" },
        { category: "media", title: "Corporate Ad Campaign", image: "/images/media1.jpg", video: "https://www.youtube.com/embed/your-video-id3" },
        { category: "media", title: "Music Video Production", image: "/images/media2.jpg", video: "https://www.youtube.com/embed/your-video-id4" },
        { category: "event", title: "Corporate Conference", image: "/images/event1.jpg", video: "https://www.youtube.com/embed/your-video-id5" },
        { category: "event", title: "Product Launch Event", image: "/images/event2.jpg", video: "https://www.youtube.com/embed/your-video-id6" },
    ];

    return (
        <div style={styles.portfolio}>
            <h1>Our Work</h1>
            <p>Explore some of our best projects in media production, live streaming, and event management.</p>

            {/* Portfolio Grid */}
            <div style={styles.container}>
                {portfolioItems.map((item, index) => (
                    <div key={index} style={styles.item} onClick={() => setSelectedVideo(item.video)}>
                        <img src={item.image} alt={item.title} style={styles.image} />
                        <div style={styles.overlay}><h3>{item.title}</h3></div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <span style={styles.close} onClick={() => setSelectedVideo(null)}>&times;</span>
                        <iframe width="800" height="450" src={selectedVideo} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

// Inline Styles
const styles = {
    portfolio: {
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
    },
    item: {
        position: "relative",
        cursor: "pointer",
    },
    image: {
        width: "100%",
        borderRadius: "10px",
        transition: "0.3s",
    },
    overlay: {
        position: "absolute",
        bottom: "10px",
        left: "10px",
        background: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "5px",
    },
    modal: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        position: "relative",
    },
    close: {
        position: "absolute",
        top: "10px",
        right: "15px",
        fontSize: "24px",
        cursor: "pointer",
    },
};

export default Portfolio;
