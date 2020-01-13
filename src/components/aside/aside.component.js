import React from 'react'
import './aside.component.css'
import SosialFollowers from '../sosial_follower/sosialFollowers.component'
import LastNews from '../last_news/lastNews.component'
import MainNews from '../main_news/mainNews.component'
import TopNews from '../top_news/topNewsContent.component'
import Join from '../join/join.component'

function Aside() {
 return (
  <aside className='aside'>
  <SosialFollowers/>
  <LastNews/>
  <MainNews src={require('../../images/bakcell_news.png')} title='Bakcell Bakutel-2019 sərgisində: ən üstün şəbəkə müştəri təcrübəsi'/>
  <TopNews/>
  <MainNews src={require('../../images/pensiya.png')} title='Pensiya və maaşlar artacaq - BU TARİXDƏN'/>
  <Join/>
  </aside>
 )
}

export default Aside
