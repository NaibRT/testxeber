import React from 'react'
import {Tags} from '../tags/tag.component'
import './newsDetail.component.css'
import oclock from '../../oclock.svg'
import eye from '../../eye.svg'

function NewsDetail() {
 return (
  <div>
  <div className='news-head'>
  <span>Ana səhifə/Texno</span>
  </div>
   <img className='news-img' alt='' src={require('../../news_img.png')}/>
   <div className='news-inform'>
   <span className='news-inform-item'>Texno-</span>
   <img alt='' src={oclock}/>
   <span className='news-inform-item'> 12.12.2019,22:25- </span>
   <img alt='' src={eye}/>
   <span className='news-inform-item'>3223</span>
   </div>
   <div className='news-text'>
     <h3 className='news-text-h'>"Twitter"in rəhbəri "Google"u təhlükəli hesab
     etdiyi üçün bu sistemdən istifadə edir</h3>
     <p className='news-text-p'>"Twitter" sosial şəbəkəsinin qurucusu və baş icraçı direktoru Cek Dorsi rəsmi hesabında "DuckDuckGo" adlı naməlum bir axtarış sistemini paylaşaraq, bundan istifadə etdiyini açıqlayıb.
     <br/>
     <br/>
     Qaynarinfo xarici mətbuata istinadən xəbər verir ki, o, təhlükəsizlik narahatlqları səbəbindən dünyanın ən məşhur axtarış sistemi olan "Google"dan istifadə etmir. İP ünvanlarını və şəxsi axtarış nəticələrini heç bir şəkildə saxlamayan "DuckDuckGo" bu səbəbdən daha təhlükəsiz görünür. Google isə demək olar bütün istifadəçi məlumatlarını reklam verə bilmək üçün toplayır və buna görə də o qədər təhlükəsiz görünmür.
      </p>
   </div>
   <Tags/>
   </div>
 )
}

export default NewsDetail
