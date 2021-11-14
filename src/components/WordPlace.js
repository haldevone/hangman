import React, { useEffect } from "react";
import "./WordPlace.css";
import { useSelector } from "react-redux";


const WordPlace = (items) => {

    // const words = props.wordArray;
    // useEffect(()=>{console.log(items.wordArray)},[items]);

    const category = useSelector((state) => state.choword.choosenCAT);

    const SetUpPlaceList = () =>(
        <ul className={"wordplace-list"}>
            {items.wordArray.map(function(item, i) {
                return <li className={"wordplace-item"} key={i}>
                {item}
                </li>
            })}
        </ul>
        )

    return ( 
        <div className="wordplace">
            <h2 className={"current-category"}>{`Current Category: ${category}`}</h2>
            <div className="wordplace-wrapper">
                {SetUpPlaceList()}
            </div>
        </div>
     );
}
 
export default WordPlace;