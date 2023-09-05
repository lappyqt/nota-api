import express, { Router } from 'express';
import { notesController } from '../controllers/notesController.js';
import { noteCreateValidator, noteDeleteValidator, noteGetValidator } from '../validators/noteValidator.js';
const router: Router = express.Router();

router.get('/', notesController.getAll);

router.get('/:id', 
    noteGetValidator(),
    notesController.getOne);

router.post('/',
    noteCreateValidator(),
    notesController.create);

router.delete('/',
    noteDeleteValidator(),
    notesController.delete);

export default router;