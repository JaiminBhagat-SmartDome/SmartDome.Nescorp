import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import apiRouter from "./routes/index";
import swaggerOptions from "./config/swagger";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRouter);

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI!)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("MongoDB error:", err));

// Start server
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});