const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 5000
// middlewares
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

// routes 
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.routes')
const userRoutes = require('./src/users/user.routes')
const adminRoutes = require('./src/stats/admin.stats')

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)



async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.get('/', (req, res) => {
        res.send('Hello World on server ')
    })
}
main().then(() => console.log("MongoDB connect successfully !")).catch(err => console.log("failed to connect", err));

app.listen(port, () => {
    console.log(`Example app : ${port}`);
})