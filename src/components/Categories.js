import { useState } from "react";
import { useDispatch } from 'react-redux';
import { choosenword } from '../redux/ducks/ChoosenWordReducer';
import {choosencategory} from '../redux/ducks/ChoosenWordReducer';

const Categories = (props) => {

let categoryClass = "categories remove";
let clickedCategory;

const{setAlphabet} = props;
const[removeClass, setremoveClass] = useState(true);
const[loading, setLoading] = useState(false);
const dispach = useDispatch();


function ChoosePlanets(){
    clickedCategory = "planets";
    SetUpAPI("planets", 50);
}

function ChooseCharacters(){
    clickedCategory = "people";
    SetUpAPI("people", 80);
}

function ChooseSpecies(){
    clickedCategory = "species";
    SetUpAPI("species", 35);
}

function SetUpAPI(category, total){
    setTimeout(() => {
        setLoading(true);

        var randItem =[Math.floor(Math.random() * total)]; //Gives a random between item 0 - total
         fetch(`https://swapi.dev/api/${category}/${randItem}/`)
        .then(res => { 
            return res.json()})
        .then(data => {
            console.log(data.name);
            if (data.name === "undefined" || data.name === "UNDEFINED") {
                CallFunctionAgain(); //prevents undefined result
            }
            if (hasNumbers(data.name) || hasSpecialCharacters(data.name)) {
                CallFunctionAgain(); //prevents undefined result
            }else{

                dispach(choosenword(data.name));
                dispach(choosencategory(category));
                setremoveClass(false);
                SetRemoveClass();
                SetAlphabetActive();
            }
            setLoading(false);
        }, [])
    }, 300);
}

function CallFunctionAgain(){
    switch (clickedCategory) {
        case "planets":
            ChoosePlanets();
            break;
        case "people":
            ChooseCharacters();
            break;
        case "species":
            ChooseSpecies();
            break;
        default:
            ChoosePlanets();
            break;
    }
}

function hasNumbers(t){
    var regex = /\d/g;
    return regex.test(t);
} 

function hasSpecialCharacters(t){
    let spChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return spChar.test(t);
} 

function SetRemoveClass(){
    if (removeClass) {
        categoryClass = "categories";
    }else{
        categoryClass = "categories remove";
    }
}

function SetAlphabetActive(){
    setAlphabet(true);
}

 if (props.isActive) {
    SetRemoveClass();
 }



    return ( 
        <div className={categoryClass}>
            <div className="categories-wrapper">
            {!loading ? (
                <div className="categories-flex">
                    <button onClick={ChoosePlanets} className="category-btn">Planets</button>
                    <button onClick={ChooseCharacters} className="category-btn">Characters</button>
                    <button onClick={ChooseSpecies} className="category-btn">Species</button>
                </div>
            ) : <p className="loading-info">Loading...</p>
                
            }
            </div>
        </div>
       
     );
}
 
export default Categories;