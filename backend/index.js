import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//Option 1
app.use(cors());

//Option 2 (used for custom origins)
// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','DELETE','PUT'],
//     allowedHeaders:['Content-Type'],
// }));

app.get('/',(request,response) => {
    console.log(request);
    return response.status(234).send("Welcome");
})

app.use('/books',bookRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("Database connected!!");
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`);
    });
})

.catch((error) => {
    console.log(error);
});