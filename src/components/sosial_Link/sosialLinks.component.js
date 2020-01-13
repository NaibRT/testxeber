import React from 'react'
import SosialLink from '../sosial_Link/sosialLink.component'

function SosialLinks() {
 return (
  <div className='news-share-links' style={{'textAlign':'left'}}>
  <SosialLink src={require('../../facebook.svg')}/>
  <SosialLink src={require('../../twitter.svg')}/>
  <SosialLink src={require('../../whatsapp.svg')}/>
  <SosialLink src={require('../../linkedin.svg')}/>
  <SosialLink src={require('../../tumber.svg')}/>
  <SosialLink src={require('../../messenger.svg')}/>
  <SosialLink src={require('../../vk.svg')}/>
  <SosialLink src={require('../../mail.svg')}/>
</div>
 )
}

export default SosialLinks
