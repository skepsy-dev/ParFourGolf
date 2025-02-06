



// Contact form action
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://parfourgolf.com", // or specify your frontend domain instead of "*"
    methods: ["POST"],
    allowedHeaders: ["Content-Type"]
}));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "")));

// Serve index.html on the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
});




// Configure Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
        user: "apikey", // Always "apikey"
        pass: process.env.SENDGRID_API_KEY // Load from .env
    }
});

// Handle contact form submission
app.post("/send-email", async (req, res) => {
    const { userName, userEmail, regarding, userMessage } = req.body;

    try {
        await transporter.sendMail({
            from: "info@parfourgolf.com",
            replyTo: userEmail,
            to: "fourpargolf@gmail.com", // Replace with your recipient email
            subject: `New Contact From ${userName}`,
            text: `Name: ${userName}\nEmail: ${userEmail}\nRegarding: ${regarding}\nMessage: ${userMessage}\n\n\n\n\n\n`
        });

        res.json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error });
    }
});





// Investor File Download Button
const PASSWORD = process.env.FILE_DOWNLOAD_PASSWORD // Set your password in .env

// Secure file download route
app.post("/download-file", (req, res) => {
    const { password } = req.body;

    if (String(password) !== String(PASSWORD)) {
        return res.status(403).json({ message: "Incorrect password" });
    }

    // File location
    const filePath = path.join(__dirname, "files", "250205_InvestorDeck_Par4.pdf");

    // Send file as response
    res.download(filePath, "250205_InvestorDeck_Par4.pdf", (err) => {
        if (err) res.status(500).json({ message: "File download failed" });
    });
});




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));