import React, { useState } from "react";
import "./portfolio.css";

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
        <div className="portfolio">
            <h1>Our Work</h1>
            <p>Explore some of our best projects in media production, live streaming, and event management.</p>

            {/* Portfolio Grid */}
            <div className="portfolio-container">
                {portfolioItems.map((item, index) => (
                    <div key={index} className={`portfolio-item ${item.category}`} onClick={() => setSelectedVideo(item.video)}>
                        <img src={item.image} alt={item.title} />
                        <div className="overlay"><h3>{item.title}</h3></div>
                    </div>
                ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setSelectedVideo(null)}>&times;</span>
                        <iframe width="800" height="450" src={selectedVideo} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
