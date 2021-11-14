import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { choosenword } from '../redux/ducks/ChoosenWordReducer';
import {choosencategory} from '../redux/ducks/ChoosenWordReducer';

const Categories = (props) => {

let categoryClass = "categories remove";

const{setAlphabet, alphabet} = props;
const[removeClass, setremoveClass] = useState(true);

//const chooseWord = useSelector((state) => state.choword.chosenWORD);
const dispach = useDispatch();




function ChoosePlanets(){
    SetUpAPI("planets", 12);
}

function ChooseCharacters(){
    // if(!SetUpAPI("people", 30)){
    //     SetUpAPI("people", 30);
    // }
    SetUpAPI("people", 30);
}

function ChooseSpecies(){
    SetUpAPI("species", 29);
}

function SetUpAPI(category, total){
    setTimeout(() => {
        var randItem =[Math.floor(Math.random() * total)];
        fetch(`https://swapi.dev/api/${category}/${randItem}/`)
        .then(res => { 
            return res.json()})
        .then(data => {
            // data.name.forEach(element => {
            //     if (element === "-") {
            //         return false;
            //     }
            // });
            dispach(choosenword(data.name));
            dispach(choosencategory(category));
            setremoveClass(false);
            SetRemoveClass();
            SetAlphabetActive();
        }, [])
    }, 600);
}

// function CallAPIAgain(){
//     SetUpAPI(category, total);
// }

function SetRemoveClass(){
    console.log("Remove class");
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
    //setremoveClass(false);
    console.log("props ran");
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