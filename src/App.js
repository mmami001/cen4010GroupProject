import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import CounterExample from './Components/CounterExample'
import Stars from './Components/Stars';
import './App.css'

function App() {
  return (
    <div>
      <Header />
     <HelloWorld name = "please rate this book" />

     <Stars></Stars>
     <Footer />
    </div>
  );
}

export default App;
