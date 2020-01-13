import React from 'react'
import './mainNews.component.css'

function MainNews(props) {
 return (
  <div className='main-news-content'>
   <img alt='' src={props.src} className='main-news-img'/>
   <div className='main-news'>
   <div className='main-news-btns'>
   <button className='mn-btn btn-p'>Populyar</button>
   <button className='mn-btn btn-s'>Siyasət</button>
  </div>
  <p className='main-news-title'>{props.title}</p>
   </div>
  </div>
 )
}

export default MainNews
