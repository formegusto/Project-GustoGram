import React from 'react';
import './GramTemplate.scss'
import GramView from './GramView';

const GramTemplate = ({boardType, grams, closeGram}) => {
    return (
        <div className="GramTemplate">
            <GramView grams={grams} boardType={boardType} closeGram={closeGram} />
        </div>
    )
}

export default GramTemplate;