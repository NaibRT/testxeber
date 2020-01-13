import React from 'react'
import './lastNewsItem.component.css'

function LastNewsItem(props) {
 return (
  <div className='lni-content'>
   <span className='lni-time'>{props.time}</span>
   <p className='lni-title'>{props.title}</p>
  </div>
 )
}

export default LastNewsItem
