const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'rootroot',
    user: 'root',
    database: 'sys',
    host: 'localhost',
    port: '3306'
});

//BOOKS SQL QUERY

let books = {};

//RETURN ALL BOOKS
books.allBooks = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Books`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//RETURN SPECIFIC BOOK WITH ISBN  **COME BACK TO THIS & CONFIRM THAT THIS IS BEST WAY
books.one = (passedBook) => {
    // console.log(passedBook);
    // let ISBN = passedBook.ISBN;
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Books WHERE ISBN = ?`, passedBook, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}


//COME BACK AND ADD THIS
//FIND SPECIFIC BOOK WITH ISBN AND UPDATE QUANTITY
//GET/PUT?




module.exports = books;