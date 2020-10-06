import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

const openMenu = () => {
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open");
}


function App() {
  return (
 <BrowserRouter>  
    <div className ="grid-container">
    <header className ="header">
        <div className = "brand">
            <button onClick = {openMenu}>
                &#9776;
            </button>
            <Link to = "/">Geek Text</Link>
        </div>
        <div className ="header-links">
            <a href = "cart.html">Cart</a>
            <a href = "signin">Sign-In</a>
        </div>
    </header>
    <aside className = "sidebar">
      <h3>Shopping Categories</h3>
      <button className = "sidebar-close-button" onClick = {closeMenu}>x</button>
      <ul>
          <li>
            <a href = "index.html">React</a>
          </li>
          <li>
            <a href = "index.html">CSS</a>
          </li>
      </ul>

    </aside>
    <main className ="main">
        <div className = "content">
            <Route path = "/product/:id" component = {ProductScreen} />
            <Route path = "/" exact = {true} component = {HomeScreen} />
       
    </div>
    </main>
    <footer className ="footer">
     All rights reservered. 2020
    </footer>
</div>
</BrowserRouter>   
   );
}

export default App;
