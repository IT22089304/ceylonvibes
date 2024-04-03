import mongoose from "mongoose";

const Payschema = mongoose.Schema(
{
    userid: {
        type: String,
        required: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    pmethod: {
        type: String,
        required: true,
    },

    pstatus: {
        type: String,
        default: 'unpaid',
            },
},

{
    timestamps: true,
}
);
export const Pay = mongoose.model('Pay', Payschema);
