import React from "react";
import { useSelector } from "react-redux";
import "./Message.css"

const Message = (props) => {

    const rightWord = useSelector((state) => state.choword.chosenWORD);

    function PageRefresh(){
        setTimeout(() => {
            window.location.reload(true);
        }, 600);
    }

    return (  
        <div className="message">
            <div className={"message-wrapper"}>
                <h2 className={"message-list"}>{"Anwser:"} 
                <span className={"rightWord"}>{rightWord}</span></h2>
                <h1 className={"message-list"} style={props.gameWon ? {color:"green"} : {color:"red"}}>
                    {props.gameWon ? 'YOU WON!' : 'GAME OVER'}
                </h1>
                <div className={"retry"}><i onClick={() => PageRefresh()} class="fas fa-redo-alt fa-5x"></i></div>
            </div>
        </div>
    );
}
 
export default Message;