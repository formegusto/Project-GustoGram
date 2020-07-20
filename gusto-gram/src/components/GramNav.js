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
                    <li className="content-li">
                        <div className="nav-list" onClick={() => onChangeGramType("list")}> 
                            <MdViewAgenda />
                            <div className="tooltip-text">List or List or List!</div> 
                        </div>
                    </li>
                    <li className="content-li">
                        <div className="nav-album" onClick={() => onChangeGramType("album")}> 
                            <MdViewModule />
                            <div className="tooltip-text">Album is Me?</div> 
                        </div>
                    </li>
                    <li className="content-li">
                        <div className="nav-slide" onClick={() => onChangeGramType("slide")}> 
                            <MdSlideshow />
                            <div className="tooltip-text">Slide~~</div> 
                        </div>
                    </li>
                    <li className="content-li"><MdDataUsage className="nav-spin" onClick={() => onSpin()}/></li>
                    <li className="nav-dropdown-li"><MdMenu className="nav-dropdown"/>
                        <ul className="dropdown-ul">
                            <li className="dropdown-li" onClick={() => onChangeGramType("list")}>List</li>
                            <li className="dropdown-li" onClick={() => onChangeGramType("album")}>Album</li>
                            <li className="dropdown-li" onClick={() => onSpin()}>Spin</li>
                            <li className="dropdown-li" onClick={() => onChangeGramType("slide")}>Slide</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GramNav;