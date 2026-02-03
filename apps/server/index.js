import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.get("/api/health", (_, res) => {
    res.json({ ok: true });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`Servidor corriendo en puerto http://localhost:${PORT} 🚀`)
);