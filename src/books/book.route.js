const express = require('express');
const { postBook, getAllBooks, getOneBook, editBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router()

// post a book
router.post("/create-book", verifyAdminToken, postBook);

// get all books from backend
router.get("/", getAllBooks);

// single book fetching 
router.get("/:id", getOneBook);

// update a book details
router.put("/edit-book/:id", verifyAdminToken, editBook)

// delete a book from backend
router.delete("/delete-book/:id", verifyAdminToken, deleteBook)

module.exports = router
