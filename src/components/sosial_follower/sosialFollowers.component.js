import React from 'react'
import SosialFollowerItem from './sosialFollowerItem.component'

function SosialFollowers() {
 return (
  <div className='sf-list'>
   <SosialFollowerItem src={require('../../svgs/facebook_sm.svg')} k='13.3'/>
   <SosialFollowerItem src={require('../../svgs/instagram.svg')} k='4.6'/>
   <SosialFollowerItem src={require('../../svgs/twitter_sm.svg')} k='41.9'/>
   <SosialFollowerItem src={require('../../svgs/youtube.svg')} k='404.7'/>
  </div>
 )
}

export default SosialFollowers
