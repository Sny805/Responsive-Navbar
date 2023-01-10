import React, { useState } from 'react'
import { MenuList } from './MenuList'
import { NavLink } from 'react-router-dom';


import "./Navbar.css";
function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <nav>
                <div className="logo">
                    VPN <font>LAB</font>
                </div>
                <ul className={clicked ? 'menu-list' : 'menu-list close'} onClick={() => setClicked(false)}>
                    {
                        MenuList.map(({ url, title }, index) => {
                            return (
                                <li key={index}> <NavLink exact to={url} activeClassName="active">{title}</NavLink></li>
                            )
                        })
                    }
                </ul>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar