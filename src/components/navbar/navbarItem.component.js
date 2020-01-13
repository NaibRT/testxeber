import React from 'react'
import './navbar.component.css'

function NavbarItem(props) {
 return (
  <li className='navbar-item'>{props.name}</li>
 )
}

export default NavbarItem
