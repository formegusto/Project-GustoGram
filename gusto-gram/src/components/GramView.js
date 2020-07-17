import React, { useEffect } from 'react';
import './GramView.scss';
import GramItem from './GramItem';
import GramInsert from './GramInsert';

function slide(index) {
    let items = document.getElementsByClassName('GramItem');
    let item = items[index];
    if(item){
        item.style.animation = "slide 2s forwards";
        item.addEventListener("animationend", () => {
            slide(index+1);
        });
    }
}

const GramView = ( {gramType, grams, closeGram, insertGram, spin} ) => {
    useEffect(() => {
        if(gramType==="slide"){
            slide(0);
        }
    }, [gramType]);

    return (
        <div className={gramType}>
            <GramInsert insertGram={insertGram}/>
            {
                grams.map((gram, index) => (
                    <GramItem className="GramItem" gram={gram} key={gram.id} closeGram={closeGram} spin={spin} index={index}/>
                ))
            }
        </div>
        
    )
};

export default GramView;