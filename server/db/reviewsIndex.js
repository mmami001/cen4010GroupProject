const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'rootroot',
    user: 'root',
    database: 'sys',
    host: 'localhost',
    port: '3306'
});


let reviews = {};

//RETURN ALL REVIEWS
reviews.allReviews = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Reviews`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//RETURN SPECIFIC REVIEW WITH REVIEWID
reviews.one = (reviewID) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Reviews WHERE ReviewID = ?`, reviewID, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}



module.exports = reviews;