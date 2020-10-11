const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'rootroot',
    user: 'root',
    database: 'sys',
    host: 'localhost',
    port: '3306'
});


//GET - GET ALL ITEMS SAVED FOR LATER
//GET - SPECIFIC ITEM FROM SAVED FOR LATER
//DELETE - DEL SPECIFIC ITEMS SAVED FOR LATER
//DELETE ALL- DELETE ALL ITEMS SAVED FOR LATER
let savedForLater = {};

//RETURN ALL REVIEWS
savedForLater.allSaved = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Saved_For_Later`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//RETURN SPECIFIC USER WITH USERID
savedForLater.one = (savedID) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Saved_For_Later WHERE SavedForLaterID = ?`, savedID, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

savedForLater.deleteSaved = (passedParam) => {
    console.log(passedParam);
    let savedID = passedParam.SavedForLaterID;

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM Saved_For_Later WHERE SavedForLaterID = ?`, savedID, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });
}



module.exports = savedForLater;