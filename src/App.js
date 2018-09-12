import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  console.log('API key', process.env.REACT_APP_TMDB_API_KEY)
  return (
    <div>
          <h1>Sweet Pumpkins!</h1>
    </div>
    );
}
 
export default App;
