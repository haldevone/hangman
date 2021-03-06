import "./WordPlace.css";
import { useSelector } from "react-redux";


const WordPlace = (items) => {

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
            <div className="wordplace-wrapper">
            <h2 className={"current-category"}>{`Current Category: ${category}`}</h2>
                {SetUpPlaceList()}
            </div>
        </div>
     );
}
 
export default WordPlace;