import React from 'react';
import './GramTemplate.scss'
import GramView from './GramView';
import { MdSignalCellular4Bar } from 'react-icons/md';

const GramTemplate = ({gramType, grams, closeGram, insertGram, spin}) => {
    return (
        <div className="GramTemplate">
            <GramView grams={grams} gramType={gramType} closeGram={closeGram} insertGram={insertGram} spin={spin}/>
            <div className="FloatMenu">
                <MdSignalCellular4Bar/>
            </div>
        </div>
    )
}

export default GramTemplate;