import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from "./main/Main";
import Header from "./header/Header";


const App = () => {
  console.log('API key', 'f1ce7cc87ef47cb9268f4c68547778cb')
  return (
    <div>
          <Header>Sweet Pumpkins!</Header>
          <Main/>
    </div>
    );
}
 
export default App;
