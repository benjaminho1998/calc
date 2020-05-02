import React from 'react';
import './App.css';
import Display from './components/display'

function App() { //Simple functional component to create the header and the Display component
  return (
    <div className="App">
      <h1>Simple Calculator</h1> 
      <Display />
    </div>
  );
}

export default App;
