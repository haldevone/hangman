import React, { useEffect, useRef } from 'react';
import './Alphabet.css'
import { useState } from 'react';
import WordPlace from './WordPlace';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rightguess, wrongguess } from '../redux/ducks/DrawCharacter';
import Message from './Message';


const Alphabet = (props) => {

    //  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    //                 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const [activeId, setactiveId] = useState(null);
    const [letters, setLetters] = useState(["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
    const[wordArray, setWordArray] = useState([]);
    const[initWordList, setInitWordList] = useState(false);
    const[gameComplete, setGameComplete] = useState(false);
    const[gameWon, setGameWon] = useState(false);
    
    const wrongGuesses = useSelector((state) => state.drawcharCount.drawNr);
    const rightGuesses = useSelector((state) => state.drawcharCount.rightNr); //REDUX store bind variabel
    const word = useSelector((state) => state.choword.chosenWORD);

    const dispach = useDispatch(); //Redux store sets the variabel

    //let word = useRef(""); //Since React Rerenders this page triggered by useState, The local var gets lost, useRef saves the current state

    let choosenWordSplit = useRef(null);
    let maxGuesses = useRef(7);
    let nrOfLetters = useRef(0);
    let wordList = [];

    useEffect(()=>{ SetUpWord() }, []);

    function SetUpWord(){
        //useRef .current gets sets values
        // const newWordArray = word.filter((item) => item !== " ");
        // const newWordArray = word.replace(/\s+/g, '');
        choosenWordSplit.current = word.toUpperCase();
        console.log(choosenWordSplit);
        
        choosenWordSplit.current = word.split('');
        nrOfLetters.current = choosenWordSplit.current.length;
        SetUpEmptyWordList(nrOfLetters.current);
    }

     const removeItem = (arr, item) => {
         let newWordArray = [...arr];
         const index = newWordArray.findIndex((element) => element === item);
         if (index !== -1) {
             newWordArray.splice(index, 1);
             return newWordArray;
         }
     }


    function SetUpEmptyWordList(length){
        wordList = Array(length).fill("_");
        let indexSpace;
        indexSpace = choosenWordSplit.current.findIndex(item => item === " ");

        if (indexSpace !== -1) {
            wordList.splice(indexSpace, 1, " ")
            nrOfLetters.current = (nrOfLetters.current - 1);
        }
       
        console.log(`Total letters ${nrOfLetters.current}`);
        setWordArray([...wordList, wordArray]);
        setInitWordList(true);
    }

    const LetterClicked = (id, props) => {
        console.log("clicked" + id);
        const clickedLetter = letters.find((item) => item === id);
        clickedLetter && setactiveId(id)
        setLetters(letters.filter((item) => item !== id));
        CheckLetter(id);
    }

    function CheckWin(){
        console.log(wrongGuesses);
        if (wrongGuesses >= maxGuesses.current) {
            console.log("GAME LOST :(");
            setGameComplete(true);
            setGameWon(false);
        }
        if (rightGuesses === nrOfLetters.current) {
            console.log("GAME WON!!!!");
            setGameComplete(true);
            setGameWon(true);
        }
    }

    function CheckLetter(id){
        let newGuess = 0;
         for (let i = 0; i < choosenWordSplit.current.length; i++) {
            if (choosenWordSplit.current[i].toUpperCase() === id) {
                wordArray[i] = id;
                newGuess ++;
                dispach(rightguess());
            }         
         }
         if (newGuess == 0) {
            dispach(wrongguess());
         }

         CheckWin();
    }


    return (  
        <div className={"alphabet"}>
            {gameComplete ? (<Message gameWon={gameWon}/>) : (initWordList && <WordPlace wordArray={wordArray}/>)}
            <div className="letters">
                <ul className="letters-list">
                    {letters.map((id) =>{
                        return(
                            <li key={id}>
                                <button 
                                key={id}
                                className={id === activeId ? "hides" : "letter"} //id === activeId ? "hide" : ""
                                onClick={() => LetterClicked(id)}
                                >{id}
                                </button>
                            </li>
                                );
                    })}
                </ul>
            </div>
        </div>
    );
}
 
export default Alphabet;