import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Items from './components/items'

let items = ['Item One', 'Item Two', 'Item Three']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Items name={items}/>
        <Footer year="2018"/>
      </div>
    );
  }
}

export default App;
