const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./db");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const allowedOrigins = process.env.CLIENT_URLS.split(",");

// Set up CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse incoming requests
app.use(express.json({ limit: "20mb" })); // To handle larger payloads if needed
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// Test Route
app.get("/", (req, res) => {
  res.send("Jai Shree Krishn");
});

// Import and use routes
const adminRoute = require("./routes/AdminRoute");
const projectRoute = require("./routes/projectRoute");
const clientRoute = require("./routes/ClientRoute");
const contactRoute = require("./routes/ContactRoute");

app.use("/", adminRoute);
app.use("/", projectRoute);
app.use("/", clientRoute);
app.use("/", contactRoute);

// Set the port to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`App is successfully running on port ${PORT}`);
});
