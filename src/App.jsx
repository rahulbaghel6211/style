import './App.css';

import { useState } from 'react';

import {
  Button,
  Div,
} from './component/Button';

function App() {

  const [theme , setTheme] = useState("dark");

  return (
    <Div  theme={theme} className="App">

      <h1>Hey Rahul</h1>

      <h3>Theme is : {theme} </h3>

      <Button  theme={theme} onClick={() => {
        alert("Clicked Add one")
      }}>Add one</Button>



      <Button theme={theme} onClick={() => {
        // alert("Clicked set theme")
        setTheme(theme === "light" ? "dark" : "light");
      }}>Set theme</Button>



      <Button  theme={theme} onClick={() => {
        alert("Clicked Styled")
      }}>Styled</Button>

         <Button  theme={theme} 
         
         
         
         onClick={() => {
        alert("Clicked click me")
      }}>click me</Button>


    </Div>


  );
}

export default App;