import React from 'react'
import NewsDetail from '../news_detail/newsDetail.component'
import SosialLinks from '../sosial_Link/sosialLinks.component'
import SimilarNews from '../similar_news/similarNews.component'
import FBComment from '../facebook_comment/fbComment.component'
import './main.component.css'

function Main() {
 return (
   <main className='main-container'>
    <NewsDetail />
    <SosialLinks />
    <FBComment/>
    <SimilarNews />
   </main>
 )
}

export default Main
