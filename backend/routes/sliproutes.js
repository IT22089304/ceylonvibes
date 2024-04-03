import express from "express";
import { Slip } from "../models/slipmodel.js";

const sliprouter = express.Router();

// Save slip
sliprouter.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({
                message: 'Send all req',
            });
        }
        const newSlip = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
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

// Update a slip by ID
sliprouter.put('/:id', async (request, response) => {
    try {
        const slip = await Slip.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!slip) {
            return response.status(404).json({ message: 'Slip not found' });
        }
        return response.status(200).json(slip);
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
