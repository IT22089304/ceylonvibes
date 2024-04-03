import express from "express";
import { Pay } from "../models/payment.js";

const payrouter = express.Router();
// Create a new payment
payrouter.post('/', async (request, response) => {
    try {
        // Check if all required fields are provided
        if (!request.body.userid || !request.body.amount || !request.body.pmethod) {
            return response.status(400).json({ message: 'Please provide userid, amount, and payment method' });
        }
        
        const newPay = {
            userid: request.body.userid,
            amount: request.body.amount,
            pmethod: request.body.pmethod,
            pstatus: request.body.pstatus || 'unpaid' // default to 'unpaid' if not provided
        };

        const pay = await Pay.create(newPay);
        return response.status(201).json(pay);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Get all payments
payrouter.get('/', async (request, response) => {
    try {
        const payments = await Pay.find({});
        return response.status(200).json(payments);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Get a single payment by ID
payrouter.get('/:id', async (request, response) => {
    try {
        const payment = await Pay.findById(request.params.id);
        if (!payment) {
            return response.status(404).json({ message: 'Payment not found' });
        }
        return response.status(200).json(payment);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Update a payment by ID
payrouter.put('/:id', async (request, response) => {
    try {
        const payment = await Pay.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!payment) {
            return response.status(404).json({ message: 'Payment not found' });
        }
        return response.status(200).json(payment);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

// Delete a payment by ID
payrouter.delete('/:id', async (request, response) => {
    try {
        const payment = await Pay.findByIdAndDelete(request.params.id);
        if (!payment) {
            return response.status(404).json({ message: 'Payment not found' });
        }
        return response.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ message: 'Server Error' });
    }
});

export default payrouter;