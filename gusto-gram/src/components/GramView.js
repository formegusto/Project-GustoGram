import React from 'react';
import './GramView.scss';
import GramItem from './GramItem';
import GramInsert from './GramInsert';

const GramView = ( {gramType, grams, closeGram, insertGram, spin} ) => {
    return (
        <div className={gramType}>
            <GramInsert insertGram={insertGram}/>
            {
                grams.map((gram, index) => (
                    <GramItem gram={gram} key={gram.id} closeGram={closeGram} spin={spin} index={index}/>
                ))
            }
        </div>
        
    )
};

export default GramView;