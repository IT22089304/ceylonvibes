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
},
{
    timestamps: true,
}
);

export const Slip = mongoose.model('Cat',slipschema);

