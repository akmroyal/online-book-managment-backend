const Book = require("./book.model")

// post a book to backend 
const postBook = (('/create-book'), async (req, res) => {
    try {
        const newBook = await Book({ ...req.body })
        await newBook.save()
        res.status(200).send({
            message: "Book Posted successfully",
            book: newBook
        })
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({
            message: "Failed to create book"
        })

    }
})

// get all books from the backend
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 })
        res.status(200).send(
            {
                message: "Books retrieved successfully",
                books: books
            }
        )
    } catch (error) {
        console.error("Error on fetching books", error);
        res.status(500).send({
            message: "Failed to fetch books"
        })
    }
}

// get one book from backend by id 
const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
        if (!book) {
            res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send(
            {
                message: "Book retrieved successfully",
                book: book
            }
        )
    } catch (error) {
        console.log("Error to fetch book", error);
        res.status(500).send({ message: "Failed to fetch your book" })
    }
}

// edit book details by id
const editBook = async (req, res) => {
    try {
        const { id } = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })
        if (!updatedBook) {
            res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send(
            {
                message: "Book updated successfully",
                book: updatedBook
            }
        )
    } catch (error) {
        console.log("Error to find update details", error);
        res.status(500).send(
            {
                message: "Failed to update book details"
            }
        )
    }
}

// delete book by id
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            res.status(404).send({ message: "Book not found" })
        }
        res.status(200).send(
            {
                message: "Book deleted successfully",
                book: deletedBook
            }
        )
    } catch (error) {
        console.log("Error to delete book", error);
        res.status(500).send(
            {
                message: "Failed to delete book"
            }
        )
    }
}


module.exports = {
    postBook,
    getAllBooks,
    getOneBook,
    editBook, 
    deleteBook
}   
