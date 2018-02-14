import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

const applicationState = {
  items: [
    {
      key: 1,
      name: 'Magic Elixir 1',
      src: './img/potion.jpg'
    },
    {
      key: 2,
      name: 'Magic Elixir 2',
      src: './img/potion.jpg'
    },
    {
      key: 3,
      name: 'Magic Elixir 3',
      src: './img/potion.jpg'
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Items items={applicationState.items} />
        <Footer year="2018"/>
      </div>
    );
  }
}

export default App;
