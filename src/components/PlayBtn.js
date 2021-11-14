import React, { useState } from 'react';
import "./PlayBtn.css";


export const PlayBtn = (props) => {
    const{setActive, isActive} = props;
    let titleClass = "title-container";

    const ActivateGame = () =>{
        //Setactive triggers setactive on App
        setTimeout(() => {
            setActive(true);
        }, 300);
        
    }
    if (isActive) {
        titleClass += " remove";      
    }

    return (
        <div className={`play ${titleClass}`}>
            <button onClick={ActivateGame} className="play-btn">PLAY</button>
            <div className={"api-box"}>
                <h1>Hangman</h1>
                <h2>With Star Wars API</h2>
            </div>
        </div>
    )
}

export default PlayBtn;
