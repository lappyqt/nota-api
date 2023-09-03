import { Request, Response } from "express";

export class HomeController {
    index(request: Request, response: Response) {
        response.send('Home');
    }
}

export const homeController = new HomeController();