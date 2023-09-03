import express, { Router } from 'express';
import { notesController } from '../controllers/notesController.js';

const router: Router = express.Router();

router.get('/', notesController.index);

export default router;