import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bugRoutes from "./routes/bugRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bugs", bugRoutes);

// Error handler
app.use(errorHandler);

// Connect to MongoDB
const MONGO_URI = "mongodb://127.0.0.1:27017/bugtracker";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
