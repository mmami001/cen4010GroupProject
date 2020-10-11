const express = require('express');
const saveLaterDB = require('../db/savedForLaterIndex.js');
const router = express.Router();

//GET ALL USERS
router.get('/', async (req, res, next) => {
    try {
        let results = await saveLaterDB.allSaved();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//GET SPECIFIC REVIEW BY REVIEWID
router.get('/:id', async (req, res, next) => {
    try {
        let results = await saveLaterDB.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//DELETE A ITEM FROM SAVED_FOR_LATER
router.delete('/', async (req, res, next) => {
    try {
        let results = await saveLaterDB.deleteSaved(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;