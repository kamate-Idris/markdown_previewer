import React from 'react'
import "./Header.css"

const Header = ({ name }) => {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="header-left">
                    <i className="fa-brands fa-figma"></i>
                    <div className="name">{name}</div>
                </div>
                <div className="header-right">
                    <i className="fas fa-arrows"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
