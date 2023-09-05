import express, { Express } from 'express';
import dotenv from 'dotenv';
import { createDbConnection } from './db/connection.js';

import homeRouter from './routes/homeRouter.js';
import notesRouter from './routes/notesRouter.js';

dotenv.config();

await createDbConnection(process.env.MONGO_URL);

const port = process.env.PORT || 3000;
const app: Express = express();

app.use(express.json());
app.use('/', homeRouter);
app.use('/notes', notesRouter);

try {
    app.listen(port, () => {
        console.log(`App started on host: http://localhost:${port}`);
    });
} catch (error) {
    console.log(`An error occured: ${error}`);
}