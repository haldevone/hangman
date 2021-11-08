import React, { useEffect } from "react";
import { useState } from "react";

const Categories = (props) => {

let categoryClass = "categories remove";
let choosenCategory;

let characters = ["LUKE", "YODA", "VADER"];
let films = ["WHALE", "TIGER", "PANDA", "SHARK", "JAGUAR"];

const{setAlphabet, alphabet} = props;
const{setChoosenWord, choosenWord} = props;
const[removeClass, setremoveClass] = useState(true);

var randItem =[Math.floor(Math.random() * 10)];
fetch(`https://swapi.dev/api/planets/${randItem}/:id/name`)
        .then(res => { 
            return res.json()})
        .then(data => {
            console.log(data);
        })


function ChoosePlanets(){
    setTimeout(() => {
        var randItem =[Math.floor(Math.random() * 10)];
        fetch(`https://swapi.dev/api/planets/${randItem}/name`)
        .then(res => { 
            return res.json()})
        .then(data => {
            setChoosenWord(data);
        })
        console.log("Planets choosen");

        
        setremoveClass(false);
        SetRemoveClass();
        SetAlphabetActive();
    }, 400);
}

function ChooseCharacters(){
    setTimeout(() => {
        console.log("Characters choosen");
        choosenCategory = characters;
        var randItem =[Math.floor(Math.random() * characters.length)];
        setChoosenWord(characters[randItem]);
        setremoveClass(false);
        SetRemoveClass();
        SetAlphabetActive();
    }, 400);
}

function ChooseFilms(){
    setTimeout(() => {
        console.log("Films choosen");
        choosenCategory = films;
        var randItem =[Math.floor(Math.random() * films.length)];
        setChoosenWord(films[randItem]);
        setremoveClass(false);
        SetRemoveClass();
        SetAlphabetActive();
    }, 400);  
}


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
                <button onClick={ChooseFilms} className="category-btn">Films</button>
                </div>
            </div>
        </div>
       
     );
}
 
export default Categories;