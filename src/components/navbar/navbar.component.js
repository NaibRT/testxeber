import React from 'react'
import {Link} from 'react-router-dom'
import menu from '../../menu.svg'
import search from '../../search.svg'
import NavbarItem from './navbarItem.component'
import './navbar.component.css'
function Navbar() {
 return (
  <ul className='h-navbar'>
    <Link><NavbarItem name='Ölkə'/></Link>
    <Link><NavbarItem name='Siyasət'/></Link>
    <Link><NavbarItem name='Texno'/></Link>
    <Link><NavbarItem name='Sənət'/></Link>
    <Link><NavbarItem name='Ekonomiks'/></Link>
    <Link><NavbarItem name='Magazin'/></Link>

    <Link><li className='navbar-item'><img alt=''src={menu}/></li></Link>
    <Link><li className='navbar-item'><img alt='' src={search}/></li></Link>
  </ul>
 )
}

export default Navbar
