const express = require('express');
const db = require('../db/usersIndex.js');
const router = express.Router();

//GET ALL USERS
router.get('/', async (req, res, next) => {
    try {
        let results = await db.allUsers();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//GET SPECIFIC USER BY USERID
router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//CREATE A NEW USER
router.post('/', async (req, res, next) => {
    try {
        let results = await db.createUser(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//UPDATE A USER
router.put('/', async (req, res, next) => {
    try {
        let results = await db.updateUser(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


//DELETE A USER
router.delete('/', async (req, res, next) => {
    try {
        let results = await db.deleteUser(req.body);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;