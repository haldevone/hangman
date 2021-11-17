import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { choosenword } from '../redux/ducks/ChoosenWordReducer';
import {choosencategory} from '../redux/ducks/ChoosenWordReducer';

const Categories = (props) => {

let categoryClass = "categories remove";
let clickedCategory;

const{setAlphabet, alphabet} = props;
const[removeClass, setremoveClass] = useState(true);

//const chooseWord = useSelector((state) => state.choword.chosenWORD);
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
        var randItem =[Math.floor(Math.random() * total)];
         fetch(`https://swapi.dev/api/${category}/${randItem}/`)
        .then(res => { 
            return res.json()})
        .then(data => {
            console.log(data.name);
            if (data.name == "undefined" || data.name == "UNDEFINED") {
                CallFunctionAgain();
            }
            if (hasNumbers(data.name) || hasSpecialCharacters(data.name)) {
                CallFunctionAgain();
            }else{
                // let word = data.name;
                // word = word.replace("-", "");
                dispach(choosenword(data.name));
                dispach(choosencategory(category));
                setremoveClass(false);
                SetRemoveClass();
                SetAlphabetActive();
            }
        }, [])
    }, 600);
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
                <div className="categories-flex">
                <button onClick={ChoosePlanets} className="category-btn">Planets</button>
                <button onClick={ChooseCharacters} className="category-btn">Characters</button>
                <button onClick={ChooseSpecies} className="category-btn">Species</button>
                </div>
            </div>
        </div>
       
     );
}
 
export default Categories;