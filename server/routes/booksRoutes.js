const express = require('express');
const booksDB = require('../db/booksIndex.js');
const router = express.Router();

//GET ALL BOOKS
router.get('/', async (req, res, next) => {
    try {
        let results = await booksDB.allBooks();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//GET SPECIFIC USER BY ISBN
router.get('/:id', async (req, res, next) => {
    console.log(req.body);
    try {
        let results = await booksDB.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});








module.exports = router;