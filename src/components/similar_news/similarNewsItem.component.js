import React from 'react'
import './similarNews.component.css'

function SimilarNewsItem(props) {
 return (
  <div className='sni-content'>
   <a href="#" className='sni-a'><img className='sni-img' alt='' src={props.img} /></a>
   <div className='sni-info'>
    <div className='sni-date'><span>Tarix:</span>{props.date}</div>
    <a href='#' className='sni-a'><p className='sni-text'>
     {props.text}
    </p></a>
   </div>
  </div>
 )
}

export default SimilarNewsItem
