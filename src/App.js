import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { amazon, coolblue, airbnb } from '../src/components/themes/themes';
import Button from './components/shared/Button';
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={airbnb}>
        <div className="App">
          <Button type="default" size="lg">Default</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
