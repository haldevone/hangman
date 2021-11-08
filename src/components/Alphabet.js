import React, { useEffect, useRef } from 'react';
import './Alphabet.css'
import { useState } from 'react';
import WordPlace from './WordPlace';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { rightguess, wrongguess } from '../redux/ducks/DrawCharacter';


const Alphabet = (props) => {

    //  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    //                 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const [activeId, setactiveId] = useState(null);
    const [letters, setLetters] = useState(["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
    const[wordArray, setWordArray] = useState([]);
    const[initWordList, setInitWordList] = useState(false);
    
    const wrongGuesses = useSelector((state) => state.drawcharCount.drawNr); //REDUX store bind variabel
    const rightGuesses = useSelector((state) => state.drawcharCount.rightNr);
    const dispach = useDispatch(); //Redux store sets the variabel

    let word = useRef(""); //Since React Rerenders this page triggered by useState, The local var gets lost, useRef saves the current state
    let letter;
    let choosenWordSplit = useRef(null);
    let maxGuesses = useRef(7);
    let nrOfLetters = useRef(0);
    let wordList = [];

    useEffect(()=>{ SetUpWord(props.choosenWord) }, []);

    function SetUpWord(item){
        word.current = item; //useRef .current gets sets values
        console.log(word);
        choosenWordSplit.current = word.current.split('');
        nrOfLetters.current = choosenWordSplit.current.length;
        SetUpEmptyWordList(nrOfLetters.current);
    }


    function SetUpEmptyWordList(length){
        wordList = Array(length).fill("_");
        setWordArray([...wordList, wordArray]);
        setInitWordList(true);
    }

    const LetterClicked = (id, props) => () => {
        const clickedLetter = letters.find((item) => item === id);
        clickedLetter && setactiveId(id)
        setLetters(letters.filter((item) => item !== id));
        CheckLetter(id);
    }

    function CheckWin(){
        console.log(wrongGuesses);
        if (wrongGuesses >= maxGuesses.current) {
            console.log("GAME LOST :(");
        }
        if (rightGuesses === nrOfLetters.current) {
            console.log("GAME WON!!!!");
        }
    }

    function CheckLetter(id){
        let newGuess = 0;
         for (let i = 0; i < choosenWordSplit.current.length; i++) {
            if (choosenWordSplit.current[i] === id) {
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
        <div>
            {initWordList && <WordPlace wordArray={wordArray}/>}
            <div className="letters">
                <ul className="letters-list">
                    {letters.map((id) =>{
                        return(
                            <li key={id}>
                                <button 
                                key={id}
                                className={id === activeId ? "hides" : "letter"} //id === activeId ? "hide" : ""
                                onClick={LetterClicked(id)}
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