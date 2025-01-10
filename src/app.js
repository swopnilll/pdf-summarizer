import dotenv from "dotenv";
import express from "express";

import questionRoute from "./routes/questionRoute.js";
import {initializeApp} from './services/backgroundService.js'

dotenv.config();

const app = express();


initializeApp(); // Call the initialization function

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/api/questions", questionRoute);

// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
