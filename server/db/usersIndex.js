const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'rootroot',
    user: 'root',
    database: 'sys',
    host: 'localhost',
    port: '3306'
});


let users = {};

//RETURN ALL USERS
users.allUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Users`, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

//RETURN SPECIFIC USER WITH USERID
users.one = (userID) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Users WHERE userID = ?`, userID, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

//CREATE USER
users.createUser = (passedParam) => {
    let userID = passedParam.userID;
    let fName = passedParam.fName;
    let mName = passedParam.mName;
    let lName = passedParam.lName;
    let email = passedParam.email;
    let loginID = passedParam.loginID;
    let password1 = passedParam.password;
    let nickname = passedParam.nickname;

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO Users (UserID, FName, MName, LName, Email, LoginID, Password, Nickname) 
        VALUES (?,?,?,?,?,?,?,?)`,[userID,fName, mName, lName, email, loginID, password1, nickname] ,(err, res) => {
            if (err) {
                console.log('entered error area');
                return reject(err);
            }
            return resolve(res);
        });
    });
}

users.updateUser = (passedParam) => {
    let userID = passedParam.userID;
    let fName = passedParam.fName;
    let mName = passedParam.mName;
    let lName = passedParam.lName;
    let email = passedParam.email;
    let loginID = passedParam.loginID;
    let password1 = passedParam.password;
    let nickname = passedParam.nickname;

    return new Promise((resolve, reject) => {
        pool.query(`UPDATE Users SET FName = ?, MName = ?, LName = ?, Email = ?, LoginID = ?, Password = ?, Nickname = ? WHERE userID = ?`, [fName, mName, lName, email, loginID, password1, nickname , userID], (err, res) => {
            if (err) {
                console.log('entered error area');
                return reject(err);
            }
            return resolve(res);
        });
    });
}

users.deleteUser = (passedParam) => {
    //console.log(passedParam);
    let userID = passedParam.userID;

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM Users WHERE userID = ?`, userID, (err, res) => {
                if (err) {
                    return reject(err);
                }
                return resolve(res);
            });
    });
}

module.exports = users;