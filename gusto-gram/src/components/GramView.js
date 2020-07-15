import React from 'react';
import './GramView.scss';
import GramItem from './GramItem';
import GramInsert from './GramInsert';

const GramView = ( {boardType, grams, closeGram} ) => {
    return (
        <div className={boardType}>
            <GramInsert/>
            {
                grams.map(gram => (
                    <GramItem gram={gram} key={gram.id} closeGram={closeGram} />
                ))
            }
        </div>
    )
};

export default GramView;