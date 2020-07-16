import React from 'react';
import './GramTemplate.scss'
import GramView from './GramView';

const GramTemplate = ({gramType, grams, closeGram, insertGram}) => {
    return (
        <div className="GramTemplate">
            <GramView grams={grams} gramType={gramType} closeGram={closeGram} insertGram={insertGram}/>
        </div>
    )
}

export default GramTemplate;