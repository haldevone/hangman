import React from 'react'
import { useState, useEffect } from 'react'

function AnwserPopUp(anwser) {

    const[animationFinished, setAnimationFinished] = useState(false);
    const[classNames, setClassNames] = useState("");
    const displayState = animationFinished ? "hidden" : "visible";

    const startStopAnimation = () => {
        setClassNames("popUp-contianer popUpAnim");
    };

    const onAnimationStart = () => {
        setAnimationFinished(false);
      };
    
      const onAnimationEnd = () => {
        setAnimationFinished(true);
        setClassNames("popUp-contianer");
      };

    useEffect(() => {
      startStopAnimation();
    }, [anwser])

    return (
        
        <div className='popUp'>
            <div 
            className={classNames}
            onAnimationEnd={() => onAnimationEnd()}
            onAnimationStart={() => onAnimationStart()}>
                <h1 style={{visibility: displayState, color:"#94781c"}}>
                    {anwser.anwser}
                </h1>
            </div>
        </div>
    )
}

export default AnwserPopUp
