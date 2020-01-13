import React from 'react'
import './topNewsItem.component.css'

function TopNewsItem(props) {
 return (
  <a href='#' className='tni-a'>
  <div className='tni-content'>
   <div className='tni-text'>
   <p className='tni-type'>{props.type}</p>
   <p className='tni-title'>{props.title}</p>
   </div>
   <img className='tni-img' alt='' src={props.src}/>
  </div>
  </a>
 )
}

export default TopNewsItem
