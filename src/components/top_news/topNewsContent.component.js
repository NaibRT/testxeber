import React from 'react'
import './topNewsItem.component.css'
import ContentHead from '../side_content_head/sideContentHead.component'
import ContentBTN from '../side_content_btn/sideContentBtn.component'
import TopNewsItem from './topNewsItem.component'

function TopNewsContent() {
 return (
  <div className='top-news-content'>
   <ContentHead name='TOP XƏBƏRLƏR'/>
   <TopNewsItem type='Ekonomiks' title='Azərbaycan nefti bahalaşdı' src={require('../../images/tni-1.png')}/>
   <TopNewsItem type='Ekonomiks' title='Azərbaycan nefti bahalaşdı' src={require('../../images/tni-2.png')}/>
   <TopNewsItem type='Ekonomiks' title='Azərbaycan nefti bahalaşdı' src={require('../../images/tni-3.png')}/>
   <TopNewsItem type='Ekonomiks' title='Azərbaycan nefti bahalaşdı' src={require('../../images/tni-4.png')}/>
   <TopNewsItem type='Ekonomiks' title='Azərbaycan nefti bahalaşdı' src={require('../../images/tni-5.png')}/>
   <ContentBTN name='Daha çox'/>
  </div>
 )
}

export default TopNewsContent
