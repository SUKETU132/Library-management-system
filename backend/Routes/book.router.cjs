const express = require("express");
const bookController = require("../Controller/book.controller.cjs");
const protect = require("../Middleware/protect.middleware.cjs");
const router = express.Router();
const upload = require("../Middleware/Multer.middleware.cjs");
const checkLibrarian = require("../Middleware/checkLibrarian.cjs");

router.route("/add-book").put(protect, checkLibrarian, upload.single('mainImage'), bookController.addBook);
// router.route("/remove-book").put(protect, checkLibrarian, bookController.addBook);
// router.route("/update-book").put(protect, checkLibrarian, bookController.addBook);

module.exports = router;