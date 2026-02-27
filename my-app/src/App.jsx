import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './calculator'

function App(){
const name = "William";

return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
  );
}

export default App;
