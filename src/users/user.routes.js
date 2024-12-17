const express = require('express')
const User = require('./user.model')
const jwt = require('jsonwebtoken')

const router = express.Router()
const jwtScret = process.env.JWT_SECRET_KEY;
router.post("/admin", async (req, res) => {
    const { username, password } = req.body
    try {
        const admin = await User.findOne({ username })
        if (!admin) {
            res.status(404).send({ message: "Admin not found!" })
        }
        if (admin.password !== password) { // check here if error occurs 
            res.status(401).send({ message: "Invalid password!" })
        }

        const token = jwt.sign({
            id: admin._id,
            username: admin.username,
            role: admin.role
        }, jwtScret, { expiresIn: "1h" })

        return res.status(200).send({
            message: "Authentication Successfull",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })
    } catch (error) {
        console.error("Failed to login as admin", error);
        res.status(401).json({ message: "Invalid Adminusername or password" })
    }
})

module.exports = router;