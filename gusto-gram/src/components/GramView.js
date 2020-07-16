import React from 'react';
import './GramView.scss';
import GramItem from './GramItem';
import GramInsert from './GramInsert';

const GramView = ( {gramType, grams, closeGram, insertGram} ) => {
    return (
        <div className={gramType}>
            <GramInsert insertGram={insertGram}/>
            {
                grams.map(gram => (
                    <GramItem gram={gram} key={gram.id} closeGram={closeGram}/>
                ))
            }
        </div>
    )
};

export default GramView;