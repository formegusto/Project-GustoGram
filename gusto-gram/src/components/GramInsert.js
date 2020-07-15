import React from 'react';
import './GramItem.scss';
import testimg from '../img/testimg.jpg';

const GramInsert = () => {
    return (
        <div className="GramInsert">
            <img src={testimg} className="content-img" alt="img"></img>
            <div className="content-description">
                <input type="text"/>
            </div>
        </div>
    );
}

export default GramInsert;