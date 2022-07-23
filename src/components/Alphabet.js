import React, { useEffect, useRef } from 'react';
import './Alphabet.css'
import { useState } from 'react';
import WordPlace from './WordPlace';
import { useSelector } from 'react-redux';
import Message from './Message';
import HangmanFigure from './HangmanFigure';
import AnwserPopUp from './AnwserPopUp';


const Alphabet = (props) => {

    const [activeId, setactiveId] = useState(null);
    const [letters, setLetters] = useState(["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
    const[wordArray, setWordArray] = useState([]);
    const[initWordList, setInitWordList] = useState(false);
    const[gameComplete, setGameComplete] = useState(false);
    const[gameWon, setGameWon] = useState(false);
    const[countWrong, setCountWrong] = useState(0);
    const[countRight, setCountRight] = useState(0);
    const[anwser, setAnwser] = useState("");
    
    const word = useSelector((state) => state.choword.chosenWORD); //REDUX store bind variabel


    let choosenWordSplit = useRef(null);
    let maxGuesses = useRef(7);
    let nrOfLetters = useRef(-1);
    let wordList = [];

    useEffect(()=>{ props.alphabet && SetUpWord() }, [props.alphabet]);

    useEffect(() => {
        CheckWin();
    }, [countWrong, countRight])

    function SetUpWord(){
        //useRef .current gets sets values
        choosenWordSplit.current = word.toUpperCase();
        console.log(choosenWordSplit);
        
        choosenWordSplit.current = word.split('');
        nrOfLetters.current = choosenWordSplit.current.length;
        SetUpEmptyWordList(nrOfLetters.current);
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
        const clickedLetter = letters.find((item) => item === id);
        clickedLetter && setactiveId(id)
        setLetters(letters.filter((item) => item !== id));
        CheckLetter(id);
    }

    function CheckWin(){
        console.log(`Right Guesses ${countRight} total ${nrOfLetters.current}`);
        if (countRight === nrOfLetters.current) {
            console.log("GAME WON!!!!");
            setGameComplete(true);
            setGameWon(true);
        }
        if (countWrong >= maxGuesses.current) {
            console.log("GAME LOST :(");
            setGameComplete(true);
            setGameWon(false);
        }

    }

    const handleWrongGuess = () => {
        setCountWrong(countWrong +1);
        setAnwser("WRONG");
    }

    const handleRightGuess = (nr) => {
        setCountRight(countRight + nr);
        setAnwser("RIGHT");
    }

    function CheckLetter(id){
        let newGuess = 0;
         for (let i = 0; i < choosenWordSplit.current.length; i++) {
            if (choosenWordSplit.current[i].toUpperCase() === id) {
                wordArray[i] = id;
                newGuess ++;
            }         
         }
         if (newGuess === 0) {
            console.log("Dispach WRONG");
            handleWrongGuess();
         }else if (newGuess > 0) {
            handleRightGuess(newGuess);
         }
    }


    return (  
        <div className={"alphabet"}>
        <AnwserPopUp anwser={anwser} />
            {gameComplete ? (<Message gameWon={gameWon}/>) : (initWordList && <WordPlace wordArray={wordArray}/>)}
            <HangmanFigure countWrong={countWrong}/>
            {props.alphabet && (!gameComplete && 
                <div className="letters">
                <ul className="letters-list">
                    {letters.map((id) =>{
                        return(
                            <li key={id}>
                                <button 
                                key={id}
                                className={id === activeId ? "hides" : "letter"}
                                onClick={() => LetterClicked(id)}
                                >{id}
                                </button>
                            </li>
                                );
                    })}
                </ul>
            </div>
            )}
        </div>
    );
}
 
export default Alphabet;