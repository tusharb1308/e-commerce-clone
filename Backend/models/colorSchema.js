import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
    name: String
})

export const colorCollection = new mongoose.model('Colors', colorSchema);