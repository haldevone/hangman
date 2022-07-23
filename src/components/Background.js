import React from "react";
import sun from "../images/sun.png";
import mountain from "../images/mountain.png";

const Background = () => {
    return ( 
        <div className={"background"}>
            <div className={"sun-one"}>
                <img src={sun} alt="sun"></img>
            </div>
            <div className={"sun-two"}>
                <img src={sun} alt="sun"></img>
            </div>
            <div className={"mountain"}>
                <img src={mountain} alt="mountain"></img>
            </div>
            <div className={"mountain-two"}>
                <img src={mountain} alt="mountain"></img>
            </div>
        </div>
     );
}
 
export default Background;