import React from "react";
import { useSelector } from "react-redux";
import "./Message.css"

const Message = (props) => {

    const rightWord = useSelector((state) => state.choword.chosenWORD);

    return (  
        <div className="message">
            <div className={"message-wrapper"}>
                {!props.gameWon && <h2 className={"message-list"}>{"Anwser:"} 
                <span className={"rightWord"}>{rightWord}</span></h2>}
                <h1 className={"message-list"} style={props.gameWon ? {color:"green"} : {color:"red"}}>
                    {props.gameWon ? 'YOU WON!' : 'GAME OVER'}
                </h1>
            </div>
        </div>
    );
}
 
export default Message;