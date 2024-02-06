import mongoose from 'mongoose';

export const port = 5010;

export const mongoDBURL = mongoose.connection;
mongoose.connect('mongodb+srv://root:root@ceylonvibes.dovkt4p.mongodb.net/ceylonVibes?retryWrites=true&w=majority', {
});
