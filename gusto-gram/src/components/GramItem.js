import React, { useEffect } from 'react';
import './GramItem.scss'
import { MdClose } from 'react-icons/md';

const GramItem = ({gram, closeGram, spin, index}) => {
    useEffect(() => {
        const item = document.getElementsByClassName("GramItem")[index]
        spin ? item.style.animation = "spin 3s infinite linear" : item.style.animation = "";
    });

    const closeGramAfterEffect = (id) => {
        console.log(`your index : ${index}`);
        const item = document.getElementsByClassName("GramItem")[index];
        const closeDiv = document.getElementsByClassName("GramClose")[index];
        const closeBtn = document.getElementsByClassName("GramCloseBtn")[index];
        const img = document.getElementsByClassName("content-img")[index];
        const content = document.getElementsByClassName('content-description')[index];

        item.style.animation = "2s deleteEffect";
        closeDiv.style.animation = "2s deleteEffect";
        closeBtn.style.animation = "2s deleteEffect";
        img.style.animation = "2s deleteEffect";
        content.style.animation = "2s deleteEffect";

        item.addEventListener('animationend', () => {
            closeGram(id);
        }, false)
    }

    return (
        <div className="GramItem">
            <div className="GramClose">
                <MdClose className="GramCloseBtn" onClick={() => closeGramAfterEffect(gram.id)}/>
            </div>
            <img src={gram.img} className="content-img" alt="img"></img>
            <div className="content-description">
                {gram.text}
            </div>
        </div>
    );
}

export default GramItem;