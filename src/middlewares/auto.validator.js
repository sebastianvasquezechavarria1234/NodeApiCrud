export const validateAuto = (req, res, next) => {
    const { nombre, precio, categoria } = req.body;
    
    if (!nombre || nombre.trim() === "") {
        return res.status(400).json({ message: "El nombre es obligatorio" });
    }
    
    if (precio === undefined || isNaN(precio) || precio <= 0) {
        return res.status(400).json({ message: "El precio debe ser un número positivo" });
    }

    if (!categoria || categoria.trim() === "") {
        return res.status(400).json({ message: "La categoría es obligatoria" });
    }

    next();
};
