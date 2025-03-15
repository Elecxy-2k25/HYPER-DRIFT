const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (like images)
app.use(express.static("public"));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
