import React from 'react';
import { MdViewAgenda , MdViewModule , 
    MdMenu , MdDataUsage, MdSlideshow } from 'react-icons/md';
import './GramNav.scss';

const GramNav = ({ onChangeGramType, onSpin }) => {
    return (
        <div className="GramNavTop">
            <div className="nav-title">
                GustoGram
            </div>
            <div className="nav-content">
                <ul className="content-ul">
                    <li className="content-li"><MdViewAgenda className="nav-list" onClick={() => onChangeGramType("list")}/></li>
                    <li className="content-li"><MdViewModule className="nav-album" onClick={() => onChangeGramType("album")}/></li>
                    <li className="content-li"><MdSlideshow className="nav-slide" onClick={() => onChangeGramType("slide")}/></li>
                    <li className="content-li"><MdDataUsage className="nav-spin" onClick={() => onSpin()}/></li>
                    <li className="nav-dropdown-li"><MdMenu className="nav-dropdown"/>
                        <ul className="dropdown-ul">
                            <li className="dropdown-li" onClick={() => onChangeGramType("list")}>List</li>
                            <li className="dropdown-li" onClick={() => onChangeGramType("album")}>Album</li>
                            <li className="dropdown-li" onClick={() => onSpin()} data-tooltip-text="Crazy, Spin">Spin</li>
                            <li className="dropdown-li" onClick={() => onChangeGramType("slide")}>Slide</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GramNav;