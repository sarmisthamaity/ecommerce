const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    clothesId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'sellThings'
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

const purchaseModel = new mongoose.model('purchase', purchaseSchema);

module.exports = purchaseModel;
