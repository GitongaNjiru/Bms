import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs"; // Hash passwords
import jwt from "jsonwebtoken"; // Generate JWT tokens

const app = express();
const port = 5000;
const secretKey = "your_secret_key"; // Change this to a secure key

// ✅ Allow both frontend ports (CORS Fix)
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

// ✅ Handle CORS Preflight Requests
app.options("*", cors());

// ✅ Middleware
app.use(bodyParser.json());

// ✅ MySQL Connection (XAMPP)
const db = mysql.createConnection({
    host: "localhost",   // ✅ Use "localhost"
    user: "root",        // ✅ Default XAMPP MySQL user is "root"
    password: "",        // ✅ Leave empty if no password set
    database: "bursary", // ✅ Ensure "bursary" exists in phpMyAdmin
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed: " + err.message);
    } else {
        console.log("✅ Connected to MySQL database (XAMPP)");

        // ✅ Test query to check if users table exists
        db.query("SHOW TABLES", (err, result) => {
            if (err) {
                console.error("❌ Error fetching tables:", err.message);
            } else {
                console.log("📌 Tables in database:", result);
            }
        });
    }
});

// ✅ Register User
app.post("/users", async (req, res) => {
    console.log("📌 Request headers:", req.headers);
    console.log("📌 Raw request body:", req.body);

    const { names, email, phoneNumber, password } = req.body;

    // Check each field individually
    console.log("📌 Field check:");
    console.log("- names:", names ? "✅ Present" : "❌ Missing");
    console.log("- email:", email ? "✅ Present" : "❌ Missing");
    console.log("- phoneNumber:", phoneNumber ? "✅ Present" : "❌ Missing");
    console.log("- password:", password ? "✅ Present" : "❌ Missing");

    // Return detailed error on missing fields
    const missingFields = [];
    if (!names) missingFields.push("names");
    if (!email) missingFields.push("email");
    if (!phoneNumber) missingFields.push("phoneNumber");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: "❌ All fields are required",
            missingFields: missingFields,
            receivedData: req.body
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
            "INSERT INTO users (names, email, phoneNumber, password) VALUES (?, ?, ?, ?)",
            [names, email, phoneNumber, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error("❌ Error adding user:", err);
                    return res.status(500).json({ message: "Error adding user: " + err.message });
                }
                res.status(201).json({ message: "✅ User registered successfully" });
            }
        );
    } catch (error) {
        console.error("❌ Server error:", error);
        res.status(500).json({ message: "Server error: " + error.message });
    }
});

// ✅ User Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "❌ Email and password required" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) {
            console.error("❌ Database error:", err);
            return res.status(500).json({ message: "Database error: " + err.message });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "❌ Invalid email or password" });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "❌ Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: "1h" });

        res.json({ message: "✅ Login successful", token });
    });
});

// ✅ Update User
app.put("/users/:id", (req, res) => {
    const { names, email, phoneNumber } = req.body;
    const { id } = req.params;

    if (!names || !email || !phoneNumber) {
        return res.status(400).json({ message: "❌ All fields are required" });
    }

    db.query(
        "UPDATE users SET names = ?, email = ?, phoneNumber = ? WHERE id = ?",
        [names, email, phoneNumber, id],
        (err, result) => {
            if (err) {
                console.error("❌ Error updating user:", err);
                return res.status(500).json({ message: "Error updating user: " + err.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "❌ User not found" });
            }
            res.json({ message: "✅ User updated successfully" });
        }
    );
});

// ✅ Delete User
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) {
            console.error("❌ Error deleting user:", err);
            return res.status(500).json({ message: "Error deleting user: " + err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "❌ User not found" });
        }
        res.json({ message: "✅ User deleted successfully" });
    });
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
