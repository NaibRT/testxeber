import React from 'react'
import './header.component.css'
import logo from '../../testxeber_logo.svg'
import Navbar from '../navbar/navbar.component'

function Header() {
    return ( 
        <>
        <header className = 'container-fluid header' >
        <div className = 'h-container' >
        <div className = 'row' >
        <div className = 'col-4 h-logo' >
        <img alt = ''src = '' / >
        </div> <div className = 'col-8 navbar-content' >
        <Navbar / >
        </div> </div> </div> 
        </header> 
        </>
    )
}

export default Header;