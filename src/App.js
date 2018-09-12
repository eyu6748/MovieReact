import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from "./main/Main";
import Header from "./header/Header";


const App = () => {
  console.log('API key', process.env.REACT_APP_TMDB_API_KEY)
  return (
    <div>
          <Header>Sweet Pumpkins!</Header>
          <Main/>
    </div>
    );
}
 
export default App;
