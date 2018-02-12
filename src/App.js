import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header.js'
import Footer from './components/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer year="2018"/>
      </div>
    );
  }
}

export default App;
