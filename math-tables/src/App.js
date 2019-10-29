import React from 'react';
import Main from './components/Main';
import Welcome from './components/Welcome';
import './styles/App.css';

function App() {
  const name = localStorage.getItem('name');

  return name ? <Main /> : <Welcome />;
}

export default App;
