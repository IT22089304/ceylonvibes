import mongoose from "mongoose";

const slipschema = mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    image: {
        data: Buffer, // Binary data for the image
        contentType: String // MIME type of the image
    }
},
{
    timestamps: true,
});

export const Slip = mongoose.model('Slip', slipschema);
