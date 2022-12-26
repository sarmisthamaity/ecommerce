const mongoose = require('mongoose');

const sellThingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    file: {
        type: Object
    },
    price: {
        type: Number
    },
    description:{ 
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    uodatedAt: {
        type: Date,
        default: Date.now
    }
});

const clothesModel = new mongoose.model('sellThings', sellThingSchema);

module.exports = clothesModel;
