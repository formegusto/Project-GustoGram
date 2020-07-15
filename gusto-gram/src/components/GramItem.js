import React from 'react';
import './GramItem.scss'
import { MdClose } from 'react-icons/md';

const GramItem = ({gram, closeGram}) => {
    return (
        <div className="GramItem">
            <div className="GramClose">
                <MdClose onClick={() => closeGram(gram.id)}/>
            </div>
            <img src={gram.img} className="content-img" alt="img"></img>
            <div className="content-description">
                {gram.text}
            </div>
        </div>
    );
}

export default GramItem;