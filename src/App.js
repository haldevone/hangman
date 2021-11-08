import { useState } from 'react';
import React from 'react';
import './App.css';
import PlayBtn from './components/PlayBtn.js';
import HangmanFigure from './components/HangmanFigure';
import Alphabet from './components/Alphabet';
import Message from './components/Message';
import Categories from './components/Categories';


function App() {
  //const[gameActive, setGameActive] = useState(false);
  const [isActive, setActive] = useState(false);
  const [alphabet, setAlphabet] = useState(false);

  
  if (isActive) {
    console.log("active is game hmm");
  }

  return (
    <>
    <PlayBtn setActive={setActive} isActive={isActive}/>
    <Categories isActive={isActive} setAlphabet={setAlphabet} alphabet={alphabet}/>

    <Message />
    <HangmanFigure />
    {alphabet && <Alphabet />}
    </>
  );
}

//DB https://swapi.dev/

export default App;
