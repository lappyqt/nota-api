import mongoose, { ConnectOptions } from "mongoose";

export async function createDbConnection(url: string, options: ConnectOptions = {}) {
    await mongoose.connect(url, options)
        .then(() => console.log(`Succesfully connected to database on host: ${url}`))
        .catch(error => console.log(`Database error: ${error}`));
}