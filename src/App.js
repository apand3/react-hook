import React from 'react';
import './App.css';
import UseStateComponent from './components/UseState/use-state'
import UseEffectComponent from './components/UseEffect/use-effect'
import UseReduceComponent from './components/UseReduce/use-reduce'
function App() {
  return (
    <div className="App">
      <UseStateComponent/>
      <UseEffectComponent/>
      <p>Using useReduce</p>
      <UseReduceComponent/>
    </div>
  );
}

export default App;
