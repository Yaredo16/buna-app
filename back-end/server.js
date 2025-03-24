
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: "https://darling-crepe-1a1446.netlify.app/",
  methods: "GET, POST, DELETE, PUT",
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from render backend!" });
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
