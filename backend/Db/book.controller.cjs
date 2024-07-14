const Book = require("../Model/book.model.cjs");
const asyncHandler = require("express-async-handler");

const Book = require('../models/Book');

exports.addBook = async (req, res) => {
    const { isbn, title, author, publisher, year, genre, quantity } = req.body;

    try {
        let mainImage = null;

        if (req.file) {
            const response = await uploadOnCloudinary(req.file.path);
            if (response) {
                mainImage = response.url;
            } else {
                throw new Error('Failed to upload image to Cloudinary');
            }
        }

        const newBook = new Book({
            isbn,
            title,
            author,
            publisher,
            year,
            genre,
            quantity,
            available_quantity: quantity,
            cover_image: mainImage
        });

        await newBook.save();

        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(201).json(newBook);

    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.removeBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book removed successfully' });
    } catch (error) {
        console.error('Error removing book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

