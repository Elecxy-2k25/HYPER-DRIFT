const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const xlsx = require("xlsx");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Excel File Path
const FILE_PATH = "contact_data.xlsx";

// Function to store form data
const saveToExcel = (data) => {
    let workbook;
    let sheetName = "Contacts";

    // Check if file exists
    if (fs.existsSync(FILE_PATH)) {
        workbook = xlsx.readFile(FILE_PATH);
    } else {
        workbook = xlsx.utils.book_new();
    }

    let worksheet = workbook.Sheets[sheetName];

    // Convert worksheet to JSON format
    let existingData = worksheet ? xlsx.utils.sheet_to_json(worksheet) : [];

    // Add new data
    existingData.push(data);

    // Convert JSON to worksheet
    let newWorksheet = xlsx.utils.json_to_sheet(existingData);

    // Append new sheet to workbook
    workbook.Sheets[sheetName] = newWorksheet;
    xlsx.writeFile(workbook, FILE_PATH);
};

// Route to handle form submission
app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const formData = { Name: name, Email: email, Message: message };

    // Save data to Excel
    saveToExcel(formData);

    res.status(200).json({ success: true, message: "Form submitted successfully!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
