import React from 'react';
import img1 from "./images/hang0.png";
import "./HangmanFigure.css";

export const HangmanFigure = () => {
    return (
        <div className="hang-img">
            <img src={img1} alt=""></img>
        </div>
    )
}

export default HangmanFigure;
