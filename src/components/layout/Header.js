import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODOList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            {/* <a href="/about" content="about page">About</a> */}
        </header>
    )
}


const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}


const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;