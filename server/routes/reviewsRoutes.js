const express = require('express');
const reviewDB = require('../db/reviewsIndex.js');
const router = express.Router();

//404 error
router.get('/', async (req, res, next) => {
    try {
        let results = res.status(404);/*await reviewDB.allReviews();*/
        //console.log(res.status(404));
        //res.json(results);
        res.status(404).send('404 Not Found');
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//GET ALL USERS
router.get('/allReviews', async (req, res, next) => {
    try {
        let results = await reviewDB.allReviews();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//GET SPECIFIC USER BY USERID
router.get('/:id', async (req, res, next) => {
    try {
        let results = await reviewDB.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});




module.exports = router;