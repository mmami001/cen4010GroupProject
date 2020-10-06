DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Books CASCADE;
DROP TABLE IF EXISTS Credit_Cards CASCADE;
DROP TABLE IF EXISTS Shipping_Address CASCADE;
DROP TABLE IF EXISTS Shopping_Cart CASCADE;
DROP TABLE IF EXISTS Saved_For_Later CASCADE;
DROP TABLE IF EXISTS Wish_Lists CASCADE;
DROP TABLE IF EXISTS Wish_List_Items CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS Order_Details CASCADE;
DROP TABLE IF EXISTS Authors CASCADE;
DROP TABLE IF EXISTS Genres CASCADE;
DROP TABLE IF EXISTS Reviews CASCADE;
DROP TABLE IF EXISTS Publishing CASCADE;

CREATE TABLE Users (
    UserID INTEGER NOT NULL,
    FName VARCHAR(20) NOT NULL,
    MName CHAR(1) NOT NULL,
    LName VARCHAR(20) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    LoginID VARCHAR(20) NOT NULL,
    Password VARCHAR(20) NOT NULL,
    Nickname VARCHAR(20),
    PRIMARY KEY (UserID),
    UNIQUE (LoginID)
);

CREATE TABLE Books (
    ISBN VARCHAR(11) NOT NULL,
    AuthorID INTEGER NOT NULL,
    PublisherID INTEGER NOT NULL,
    GenreID INTEGER NOT NULL,
    ReviewID INTEGER NOT NULL,
    Cover BLOB NULL,
    Title VARCHAR(80) NOT NULL,
    Description TEXT NOT NULL,
    Price DECIMAL(4,2) NOT NULL,
    Sales INTEGER NOT NULL,
    PRIMARY KEY (ISBN)
);

CREATE TABLE Credit_Cards (
    CCNum BIGINT NOT NULL,
    UserID INTEGER NOT NULL,
    CCName VARCHAR(40) NOT NULL,
    ExpDate VARCHAR(7) NOT NULL,
    CVV VARCHAR(4) NOT NULL,
    PRIMARY KEY (CCNum)
);

CREATE TABLE Shipping_Address (
    ShippingID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    AddressNum INTEGER NOT NULL,
    Street VARCHAR(20) NOT NULL,
    City VARCHAR(20) NOT NULL,
    State VARCHAR(20) NOT NULL,
    ZipCode VARCHAR(10) NOT NULL,
    Country VARCHAR(20) NOT NULL,
    PRIMARY KEY (ShippingID)
);

CREATE TABLE Shopping_Cart (
    ShoppingCartID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    ISBN VARCHAR(11) NOT NULL,
    PRIMARY KEY (ShoppingCartID)
);

CREATE TABLE Saved_For_Later (
    SavedForLaterID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    ISBN VARCHAR(11) NOT NULL,
    PRIMARY KEY (SavedForLaterID)
);

CREATE TABLE Wish_Lists (
    WishListNum INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    WishListName VARCHAR(30) NOT NULL,
    PRIMARY KEY (WishListNum)
);

CREATE TABLE Wish_List_Items (
    WishListNum INTEGER NOT NULL,
    ISBN VARCHAR(11) NOT NULL
);

CREATE TABLE Orders (
    OrderID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    TotPrice DECIMAL(6,2) NOT NULL,
    OrderDate DATE NOT NULL,
    PRIMARY KEY (OrderID)
);

CREATE TABLE Order_Details (
    OrderID INTEGER NOT NULL,
    ISBN VARCHAR(11) NOT NULL,
    UnitPrice DECIMAL(4,2) NOT NULL,
    Quantity INTEGER NOT NULL
);

CREATE TABLE Authors (
    AuthorID INTEGER NOT NULL,
    FName VARCHAR(20) NOT NULL,
    MName CHAR(1) NOT NULL,
    LName VARCHAR(20) NOT NULL,
    Biography TEXT NOT NULL,
    PRIMARY KEY (AuthorID)
);

CREATE TABLE Genres (
    GenreID INTEGER NOT NULL,
    GenreName VARCHAR(15) NOT NULL,
    PRIMARY KEY (GenreID)
);

CREATE TABLE Reviews (
    ReviewID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    Rating INTEGER NOT NULL,
    Comment TEXT NOT NULL,
    PostedDate DATE NOT NULL,
    PRIMARY KEY (ReviewID)
);

CREATE TABLE Publishing (
    PublisherID INTEGER NOT NULL,
    PublisherName VARCHAR(30) NOT NULL,
    PublishedDate DATE NOT NULL,
    PublishedLocation VARCHAR(20) NOT NULL,
    PRIMARY KEY (PublisherID)
);


/*(ISBN, AuthorID, PublisherID, GenreID, ReviewID, Cover, Title, Description, Price, Sales)*/
INSERT INTO Books 
VALUES      ('368907673-0', 1, 1, 1, 1, null, 'Moon Warriors, The (Zhan shen chuan shuo)', 'Excision foot joint NEC', 12.49, 43205),
            ('052611802-4', 2, 2, 2, 2, null, 'American Movie', 'Intestinal x-ray NEC', 12.99, 174731),
            ('454952624-6', 3, 3, 3, 3, null, 'Dinotopia', 'Dilation of rectum', 14.49, 180935),
            ('562531213-3', 4, 4, 4, 4, null, 'Last Supper, The', 'Shorten 1 extraoc musc', 14.99, 68716),
            ('593889986-9', 5, 5, 5, 5, null, 'Birders: The Central Park Effect (Central Park Effect, The)', 'Clos periph nerve biopsy', 15.99, 151762);

/*(UserID, FName, MName, LName, Email, LoginID, Password, Nickname)*/
INSERT INTO Users 
VALUES      (1, 'Amelie', 'O', 'Doncom', 'adoncom0@moonfruit.com', 'Rapidhorse123!', 'rgTxzaKSy2', 'adoncom0'),
            (2, 'Roanna', 'P', 'Baythrop', 'rbaythrop1@howstuffworks.com', 'Swiftcow123!', 'yhL3OAG', 'rbaythrop1'),
            (3, 'Immanuel', 'Y', 'Ashling', 'iashling2@domainmarket.com', 'Speedycar123!', '1S8dXoI7pk3', 'iashling2'),
            (4, 'Svend', 'K', 'Godart', 'sgodart3@techcrunch.com', 'Fastturtle123!', 'roPP2OPfNb', 'sgodart3'),
            (5, 'Minna', 'X', 'Marrow', 'mmarrow4@globo.com', 'Rashcat123!', 'PgMUpoohN2h', 'mmarrow4');

/*(AuthorID, FName, MName, LName, Biography)*/
INSERT INTO Authors 
VALUES      (1, 'Carlynne', 'E', 'Marchant', 'Had a great smile.'),
            (2, 'Jojo', 'D', 'Deares', 'Very eloquent with story building.'),
            (3, 'Alexia', 'G', 'Sellers', 'Wrote first book at 9 years old.'),
            (4, 'Valerie', 'B', 'Sahlstrom', 'Wrote over 500 books.'),
            (5, 'Bertie', 'Z', 'Berry', 'Winner of the highest award for book writing.');

/*(PublishingID, PublisherName, PublishedDate, PublishingLocation)*/
INSERT INTO Publishing 
VALUES      (1, 'Moen Inc', ('1959-08-19'), 'Yanzhou'),
            (2, 'Herman and Sons', '2012-06-22', 'Sayama'),
            (3, 'Flatley, Nolan and Murphy', '2011-09-10', 'Chamlykskaya'),
            (4, 'Heathcote Group', '1968-08-09', 'Linköping'),
            (5, 'Kutch, Cronin and Lubowitz', '2012-04-05', 'Lons-le-Saunier');

/*(GenreID, GenreName)*/
INSERT INTO Genres 
VALUES      (1, 'Thriller'),
            (2, 'Drama'),
            (3, 'Fantasy'),
            (4, 'Drama'),
            (5, 'Action');

/*(ReviewID, UserID, Rating, Comment, PostedDate)*/
INSERT INTO Reviews 
VALUES      (1, 1, 1, 'Awful book.', '2015-01-17'),
            (2, 2, 2, 'Meh.', '2015-04-21'),
            (3, 3, 3, 'It was good.', '2016-08-07'),
            (4, 4, 4, 'Great story!', '2015-08-11'),
            (5, 5, 5, 'Masterpiece.', '2018-08-13');

/*(CCNum, UserID, CCName, ExpDate, CVV)*/
INSERT INTO Credit_Cards 
VALUES      (3539459127003764, 1, 'Amelie Doncom', "11/2021", 347),
            (3582104572083400, 2, 'Roanna Baythrop', "10/2024", 902),
            (3573187947803504, 3, 'Immanuel Ashling', "3/2025", 1242),
            (6304718432188842, 4, 'Svend Godart', "5/2023", 436),
            (4936880548282835, 5, 'Minna Marrow', "6/2023", 1674),
            (5018322466716548, 1, 'Amelie Doncom', "2/2022", 251),
            (3551521658893435, 2, 'Roanna Baythrop', "8/2025", 835),
            (3531121490926488, 3, 'Immanuel Ashling', "4/2023", 865),
            (5020216581348291, 4, 'Svend Godart', "1/2023", 2384),
            (4903067899584236, 5, 'Minna Marrow', "6/2022", 406);

/*(ShippingID, UserID, AddressNum, Street, City, State, Country, ZipCode)*/
INSERT INTO Shipping_Address 
VALUES      (1, 1, '7336', 'Ryan', 'Bethesda', 'Maryland', 'United States', '20892'),
            (2, 2, '2358', 'Thompson', 'Nashville', 'Tennessee', 'United States', '37240'),
            (3, 3, '22', '5th', 'Reno', 'Nevada', 'United States', '89519'),
            (4, 4, '4', 'Northfield', 'New York City', 'New York', 'United States', '10270'),
            (5, 5, '290', 'Bay', 'Denver', 'Colorado', 'United States', '80209');

/*(OrderID, UserID, TotPrice, OrderDate) */
INSERT INTO Orders 
VALUES      (1, 1, 12.49, '2020-06-08'),
            (2, 2, 25.98, '2020-02-25'),
            (3, 3, 43.47, '2020-03/11'),
            (4, 4, 29.98, '2020-05-25'),
            (5, 5, 15.99, '2019-11-23');

/*(OrderID, ISBN, UnitPrice, Quantity)*/
INSERT INTO Order_Details
VALUES      (1, '368907673-0', 12.49, 1),
            (2, '052611802-4', 12.99, 2),
            (3, '454952624-6', 14.49, 3),
            (4, '562531213-3', 14.99, 2),
            (5, '593889986-9', 15.99, 1);

/*(ShoppingCartID, UserID, ISBN)*/
INSERT INTO Shopping_Cart 
VALUES      (1, 1, '593889986-9'),
            (2, 2, '368907673-0'),
            (3, 3, '052611802-4'),
            (4, 4, '454952624-6'),
            (5, 5, '562531213-3');

/*(SavedForLaterID, UserID, ISBN)*/
INSERT INTO Saved_For_Later 
VALUES      (1, 1, '562531213-3'),
            (2, 2, '593889986-9'),
            (3, 3, '368907673-0'),
            (4, 4, '052611802-4'),
            (5, 5, '454952624-6');

/*(WishListID, UserID, WishListName)*/
INSERT INTO Wish_Lists 
VALUES      (1, 1, 'Christmas List'),
            (2, 2, 'Top 10 Books'),
            (3, 3, 'Cool books'),
            (4, 4, 'Recipe Books'),
            (5, 5, 'Must Have Books');

/*(WishListID, ISBN)*/
INSERT INTO Wish_List_Items 
VALUES      (1, '454952624-6'),
            (2, '562531213-3'),
            (3, '593889986-9'),
            (4, '368907673-0'),
            (5, '052611802-4');

ALTER TABLE Books 
 ADD FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID);
ALTER TABLE Books 
 ADD FOREIGN KEY (GenreID) REFERENCES Genres(GenreID);
ALTER TABLE Books 
 ADD FOREIGN KEY (PublisherID) REFERENCES Publishing(PublisherID);
ALTER TABLE Books 
 ADD FOREIGN KEY (ReviewID) REFERENCES Reviews(ReviewID);
ALTER TABLE Credit_Cards 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Shipping_Address 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Shopping_Cart 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Shopping_Cart 
 ADD FOREIGN KEY (ISBN) REFERENCES Books(ISBN);
ALTER TABLE Saved_For_Later 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Saved_For_Later 
 ADD FOREIGN KEY (ISBN) REFERENCES Books(ISBN);
ALTER TABLE Wish_Lists 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Wish_List_Items 
 ADD FOREIGN KEY (WishListNum) REFERENCES Wish_Lists(WishListNum);
ALTER TABLE Wish_List_Items 
 ADD FOREIGN KEY (ISBN) REFERENCES Books(ISBN);
ALTER TABLE Orders 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);
ALTER TABLE Order_Details 
 ADD FOREIGN KEY (OrderID) REFERENCES Orders(OrderID);
ALTER TABLE Order_Details 
 ADD FOREIGN KEY (ISBN) REFERENCES Books(ISBN);
ALTER TABLE Reviews 
 ADD FOREIGN KEY (UserID) REFERENCES Users(UserID);