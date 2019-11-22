import React from 'react'
import {Link} from 'react-router-dom'

import "../css/Navbar.css"

const Navbar = () => {
    return (
    <div className='navbar'>
        <div className='title'>
            <h1>JOB SEARCH APPLICATION</h1>
        </div>
        <div className='links'>
            <Link to='/'>
                <h1>Home</h1>
                </Link> 
            <Link to='/about'>
                <h1>About</h1>
                </Link>
        </div>

    </div>
    )
}

export default Navbar