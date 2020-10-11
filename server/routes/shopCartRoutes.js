const express = require('express');
const shoppingCartDB = require('../db/shopCartIndex.js');
const router = express.Router();


//GET ALL ITEMS IN SHOPPING CART
router.get('/', async (req, res, next) => {
    try {
        let results = await shoppingCartDB.allBooks();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//UPDATE SHOPPING CART
router.put('/', async (req, res, next) => {
    try {
        let results = await shoppingCartDB.addBook(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});








module.exports = router;