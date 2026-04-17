import express from "express";
import autoRoutes from "./src/routes/auto.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Bienvenido a mi primera API con Node.js profesional! 🗿");
});

app.use("/autos", autoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Algo salió mal!" });
});

app.listen(PORT, () => {
    console.log(`El servidor está levantado en el puerto ${PORT}`);
});