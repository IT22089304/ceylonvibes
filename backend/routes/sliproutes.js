import express from "express";
import { Slip } from "../models/slipmodel.js";

const sliprouter = express.Router();

// Save slip with image
sliprouter.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear || !request.body.image) {
            return response.status(400).send({
                message: 'Send all required fields including image',
            });
        }

        const newSlip = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
            image: {
                data: request.body.image.data,
                contentType: request.body.image.contentType
            }
        };

        const slip = await Slip.create(newSlip);
        return response.status(201).send(slip);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Get all slips
sliprouter.get('/', async (request, response) => {
    try {
        const slips = await Slip.find({});
        return response.status(200).json(slips);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Get a single slip by ID
sliprouter.get('/:id', async (request, response) => {
    try {
        const slip = await Slip.findById(request.params.id);
        if (!slip) {
            return response.status(404).json({ message: 'Slip not found' });
        }
        return response.status(200).json(slip);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Update a slip by ID with image
sliprouter.put('/:id', async (request, response) => {
    try {
        const slipToUpdate = await Slip.findById(request.params.id);
        if (!slipToUpdate) {
            return response.status(404).json({ message: 'Slip not found' });
        }

        slipToUpdate.title = request.body.title || slipToUpdate.title;
        slipToUpdate.author = request.body.author || slipToUpdate.author;
        slipToUpdate.publishYear = request.body.publishYear || slipToUpdate.publishYear;
        
        if (request.body.image) {
            slipToUpdate.image = {
                data: request.body.image.data,
                contentType: request.body.image.contentType
            };
        }

        const updatedSlip = await slipToUpdate.save();
        return response.status(200).json(updatedSlip);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Delete a slip by ID
sliprouter.delete('/:id', async (request, response) => {
    try {
        const slip = await Slip.findByIdAndDelete(request.params.id);
        if (!slip) {
            return response.status(404).json({ message: 'Slip not found' });
        }
        return response.status(200).json({ message: 'Slip deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

export default sliprouter;