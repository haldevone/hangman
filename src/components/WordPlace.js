import React, { useEffect } from "react";
import "./WordPlace.css";

const WordPlace = (items) => {

    // const words = props.wordArray;
    // useEffect(()=>{console.log(items.wordArray)},[items]);



    const SetUpPlaceList = () =>(
        <ul className={"wordplace-list"}>
            {items.wordArray.map(function(item, i) {
                return <li className={"wordplace-item"} key={i}>{item}</li>
            })}
        </ul>
        )

    return ( 
        <div className="wordplace">
            <div className="wordplace-wrapper">
                {SetUpPlaceList()}
            </div>
        </div>
     );
}
 
export default WordPlace;