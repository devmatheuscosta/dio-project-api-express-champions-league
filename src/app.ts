import express, { json } from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
	const app = express();

	app.use(json());
	app.use("/api/v1", router);

	const corsOptions = {
		origin: "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type"],
		credentials: true,
	};

	// Configurar o CORS como middleware
	app.use(cors(corsOptions));

	return app;
}

export default createApp;
