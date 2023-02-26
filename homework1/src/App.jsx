import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './components/Form';

import './App.css';

const App = () => {

  return (
    <div className="App">
     <img id="title" src="./awning.png"></img>
     <h1>Resturant Favorities</h1>
    
     <Form/>
    </div>
  )
}

export default App