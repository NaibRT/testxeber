import React from 'react'
import './footer.component.css'
import NavbarItem from '../navbar/navbarItem.component'

function Footer() {
 return (
  <footer className='footer'>
    <div className='footer-navbar-content'>
      <div className='footer-navbar'>
      <NavbarItem name='Ölkə'/>
      <NavbarItem name='Siyasət'/>
      <NavbarItem name='Texno'/>
      <NavbarItem name='Sənət'/>
      <NavbarItem name='Ekonomiks'/>
      <NavbarItem name='Magazin'/>
      <NavbarItem name='İdman'/>
      <NavbarItem name='Dünya'/>
      <NavbarItem name='Sağlamlıq'/>
      <NavbarItem name='Foto'/>
      <NavbarItem name='Video'/>
      </div>
    </div>
    <div className='footer-copyright-content'>
       <div className='footer-copyright'>
       <img className='footer-img' alt='' src={require('../../images/noproblem.png')}/>
       <span>&#169;Yenisabah.az 2019 Bütün hüquqlar qorunur.</span>
       </div>
       <div className='footer-info'>
       <NavbarItem name='Haqqımızda'/>
       <NavbarItem name='Reklam'/>
       <NavbarItem name='Əlaqə'/>
       </div>
    </div>
  </footer>
 )
}

export default Footer
