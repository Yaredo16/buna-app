// filepath: back-end/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();
const PORT = Process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/api/todos", todoRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
