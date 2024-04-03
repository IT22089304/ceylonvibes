import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import sliprouter from "./routes/sliproutes.js";
import payrouter from "./routes/paymentroute.js";
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome ');
});

// Use slip and pay routes
app.use('/slip', sliprouter);
app.use('/pay', payrouter);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected');
        app.listen(PORT, () => {
            console.log(`App is listening ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error:', error);
    });
