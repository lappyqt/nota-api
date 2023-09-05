import { Request, Response } from "express";
import { Note } from "../models/note.js";
import { validationResult } from "express-validator";

export class NotesController {
    getAll(request: Request, response: Response) {
        Note.find().then((value: any) => {
            response.json(value);
        });
    }

    getOne(request: Request, response: Response) {
        const id = request.params.id;
        const result = validationResult(request);

        if (!result.isEmpty()) {
            return response.json({ errors: result.array() });
        }

        Note.findById(id).then((note: any) => {
            response.json(note);
        });
    }

    create(request: Request, response: Response) {
        const result = validationResult(request);

        if (!result.isEmpty()) {
            return response.json({ errors: result.array() });
        }

        const note = new Note(request.body);
        note.save();

        response.statusCode = 201;
        response.json(request.body);
    }

    delete(request: Request, response: Response) {
        const id = request.body.id;
        const result = validationResult(request);

        if (!result.isEmpty()) {
            return response.json({ success: false, errors: result.array() });
        }

        Note.findByIdAndDelete(id);

        response.json({ success: true, id: id });
    }
}

export const notesController = new NotesController();