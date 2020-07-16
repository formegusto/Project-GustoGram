import React from 'react';
import { MdViewAgenda , MdViewModule , MdMenu } from 'react-icons/md';
import './GramNav.scss';

const GramNav = ({ onChangeGramType }) => {
    return (
        <div className="GramNavTop">
            <div className="nav-title">
                GustoGram
            </div>
            <div className="nav-content">
                <ul className="content-ul">
                    <li className="content-li"><MdViewAgenda className="nav-list" onClick={() => onChangeGramType("list")}/></li>
                    <li className="content-li"><MdViewModule className="nav-album" onClick={() => onChangeGramType("album")}/></li>
                    <li className="nav-dropdown-li"><MdMenu className="nav-dropdown"/>
                        <ul className="dropdown-ul">
                            <li className="dropdown-li" onClick={() => onChangeGramType("list")}>List</li>
                            <li className="dropdown-li" onClick={() => onChangeGramType("album")}>Album</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GramNav;