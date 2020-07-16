import React from 'react';
import './GramInsert.scss';
import { MdMoreHoriz, MdAdd } from 'react-icons/md';
import testimg from '../img/testimg.jpg';

function sizeGramInser({insertGram}) {
    var img = document.getElementsByClassName("insert-img")[0];
    
    var ani = img.style.animation + "";
    if(!ani){
        img.style.height = "400px";
        img.style.animation = "1s MiniGramInsert forwards";
    } else {
        if(ani.indexOf("MiniGramInsert") !== -1){
            img.style.height = "0px";
            img.style.animation = "1s BigGramInsert forwards";
        } else {
            img.style.height = "400px";
            img.style.animation = "1s MiniGramInsert forwards";
        }
    }
}

const GramInsert = () => {
    return (
        <div className="GramInsert">
            <div className="GramClose" onClick={sizeGramInser}>
                <MdMoreHoriz/>
            </div>
            <img src={testimg} className="insert-img" alt="img"></img>
            <div className="insert-description">
                <input type="text"/>
                <button>
                    <MdAdd />
                </button>
            </div>
        </div>
    );
}

export default GramInsert;