import express from "express";
import * as autoController from "../controllers/auto.controller.js";

const router = express.Router();

router.get("/", autoController.getAllAutos);
router.get("/:id", autoController.getAutoById);
router.post("/", autoController.createAuto);
router.put("/:id", autoController.updateAuto);
router.delete("/:id", autoController.deleteAuto);

export default router;
