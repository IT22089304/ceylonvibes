import express from "express";
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {  Slip } from "./models/slipmodel.js";


const app = express();
app.use(express.json());

app.get('/',(request,response)=>{

    console.log(request);
    return response.status(234).send('welcome ');
});

//save slip
app.post('/slip',async (request,response)=>{
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        )
        {
            return response.status(400).send({
                message:'Send all req',
            });
        }
        const newSlip={
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear,
        };

        const slip =await Slip.create(newSlip);
        return response.status(201).send(slip);
        
    } catch (error) {
        console.log('sss');
    }

});

mongoose
.connect(mongoDBURL)
.then(()=>
    {
console.log('App is connected');

app.listen(PORT, ()=>{
    console.log(`App is listining ${PORT}`);
    });
    })

.catch((error)=>
     {
            console.log('Error');
    });



