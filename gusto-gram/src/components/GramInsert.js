import React, { useState } from 'react';
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

const GramInsert = ( { insertGram } ) => {
    const [gram, setGram] = useState({
        id: 0,
        text: '',
        img: testimg
    });
    
    const onChange = (e) => {
        setGram({
            ...gram,
            text : e.target.value,
        });
    }

    const onSubmit = (e) => {
        insertGram(gram);
        e.preventDefault();
    }

    return (
        <form className="GramInsert" onSubmit={onSubmit}>
            <div className="GramClose" onClick={sizeGramInser}>
                <MdMoreHoriz/>
            </div>
            <img src={testimg} className="insert-img" alt="img"></img>
            <div className="insert-description">
                <input name="text" type="text" onChange={onChange}/>
                <button type="submit">
                    <MdAdd />
                </button>
            </div>
        </form>
    );
}

export default GramInsert;