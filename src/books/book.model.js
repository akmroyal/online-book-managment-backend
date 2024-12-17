const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    trending: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
})

const Book = mongoose.model('Book',bookSchema);
module.exports = Book