import React from 'react'
import './sosialLink.component.css'

function SosialLink(props) {
 return (
  <div className='sosial-link'>
   <a href='#'>
     <img alt='' src={props.src}/>
   </a>
  </div>
 )
}

export default SosialLink
