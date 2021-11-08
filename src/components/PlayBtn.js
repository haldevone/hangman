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
        <div className={titleClass}>
            <button onClick={ActivateGame} className="play-btn">PLAY</button>
        </div>
    )
}

export default PlayBtn;
