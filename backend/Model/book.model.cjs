const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    title: {     
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    available_quantity: {
        type: Number,
        required: true,
        default: function () {
            return this.quantity;
        }
    },
    cover_image: {
        type: String,
        default: null
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
