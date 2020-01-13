import React from 'react'
import './sosialFollowerItem.component.css'

function SosialFollowerItem(props) {
 return (
  <a href='#' style={{'textDecoration':'none'}}>
  <div href='' className='sf-item'>
   <img alt='' src={props.src} className='sf-icon'/>
   <div className='sf-k'>{props.k}k</div>
   <div className='sf-f'>Followers</div>
  </div>
  </a>
 )
}

export default SosialFollowerItem
