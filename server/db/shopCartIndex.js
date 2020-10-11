const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'rootroot',
    user: 'root',
    database: 'sys',
    host: 'localhost',
    port: '3306'
});

//SHOPPING_CART SQL QUERIES

let shoppingCart = {};

//RETURN ALL SHOPPING_CART ITEMS BY ShoppingCartID
shoppingCart.allBooks = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Shopping_Cart`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//RETURN ALL SHOPPING_CART ITEMS BY ShoppingCartID      *****COME BACK TO THIS AND ADD FUNCTIONALITY
//NEED TO HAVE A VALID ISBN TO ADD TO SHOPPING CART
shoppingCart.addBook = (bookToAdd) => {
    console.log(bookToAdd);
    let shoppingCartID = bookToAdd.ShoppingCartID;
    let userID = bookToAdd.UserID;
    let isbn = bookToAdd.ISBN;
    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO Shopping_Cart (ShoppingCartID, UserID, ISBN) 
        VALUES (?,?,?)`, [shoppingCartID, userID, isbn], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};







module.exports = shoppingCart;