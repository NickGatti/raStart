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
      name: 'Magic Elixir 1'
    },
    {
      key: 2,
      name: 'Magic Elixir 2'
    },
    {
      key: 3,
      name: 'Magic Elixir 3'
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Items items={applicationState.items}/>
        <Footer year="2018"/>
      </div>
    );
  }
}

export default App;
