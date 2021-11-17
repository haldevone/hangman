import React from 'react';
import { useSelector } from 'react-redux';
import img1 from "../images/hang0.png";
import img2 from "../images/hang1.png";
import img3 from "../images/hang2.png";
import img4 from "../images/hang3.png";
import img5 from "../images/hang4.png";
import img6 from "../images/hang5.png";
import img7 from "../images/hang7.png";
import img8 from "../images/hang8.png";
import "./HangmanFigure.css";


export const HangmanFigure = (props) => {

    function ShowImage(){
        switch (props.countWrong) {
            case 0:
                return img1
            case 1:
                return img2
            case 2:
                return img3
            case 3:
                return img4
            case 4:
                return img5
            case 5:
                return img6
            case 6:
                return img7
            case 7:
                return img8
            default:
                return img1
        }
    }

    return (
        <div className="hang-img">
            <img src={ShowImage()} alt=""></img>
        </div>
    )
}

export default HangmanFigure;
