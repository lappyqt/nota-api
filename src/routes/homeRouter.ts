import express, { Router } from "express";
import { homeController } from "../controllers/homeController.js";

const router: Router = express.Router();

router.get('/', homeController.index);

export default router;