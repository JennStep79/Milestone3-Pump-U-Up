const users = require('express').Router();
const db = require('../models');
const { User } = db;

// GET user
users.get('/', async (req, res) => {
    try {
        // code for retrieving user
    } catch (err) {
        res.status(500).send("Error retrieving user")
        console.log(err)
    }
})

module.exports = users;