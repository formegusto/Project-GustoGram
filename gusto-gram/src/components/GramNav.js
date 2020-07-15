import React from 'react';
import { MdViewAgenda , MdViewModule , MdMenu } from 'react-icons/md';
import './GramNav.scss';

const GramNav = ({ onChangeBoardType }) => {
    return (
        <div className="GramNavTop">
            <div className="nav-title">
                GustoGram
            </div>
            <div className="nav-content">
                <ul className="content-ul">
                    <li className="content-li"><MdViewAgenda className="nav-list" onClick={() => onChangeBoardType("list")}/></li>
                    <li className="content-li"><MdViewModule className="nav-album" onClick={() => onChangeBoardType("album")}/></li>
                    <li className="nav-dropdown-li"><MdMenu className="nav-dropdown"/>
                        <ul className="dropdown-ul">
                            <li className="dropdown-li">List</li>
                            <li className="dropdown-li">Album</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default GramNav;