import { Request, Response } from "express";

export class NotesController {
    index(request: Request, response: Response) {
        response.send('Notes');
    }
}

export const notesController = new NotesController();