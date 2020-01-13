import React from 'react'
import SimilarNewsItem from './similarNewsItem.component'
import './similarNews.component.css'

function SimilarNews(props) {
 let text='Ölkənin enerji təhlükəsizliyinə təhdid:Azərbaycan regionun “zapravka"sına çevrilir';
 return (
  <div>
  <div className='sn-content-head'><span>OXŞAR XƏBƏRLƏR</span>
  <div className='red-line'></div>
  </div>
  <div className='sn-content'>
  <SimilarNewsItem img={require('../../images/1f0b3ddf-f2e2-4066-9367-73449a1981ee.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/1f2ee9c5-88f1-4b2d-86cc-6b308e73e89b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/3f7855c6-4683-4a96-baed-9d2ea5cba94b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/75235e7b-3d36-4cb5-a80f-6da95ce25a45.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/bb34eb88-076a-405c-9105-b5be4962c34b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/e176e3b8-763c-454c-8dd5-d026399fae21.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/1f0b3ddf-f2e2-4066-9367-73449a1981ee.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/1f2ee9c5-88f1-4b2d-86cc-6b308e73e89b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/3f7855c6-4683-4a96-baed-9d2ea5cba94b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/75235e7b-3d36-4cb5-a80f-6da95ce25a45.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/bb34eb88-076a-405c-9105-b5be4962c34b.png')} text={text} date='02.12.2019,22:25'/>
  <SimilarNewsItem img={require('../../images/e176e3b8-763c-454c-8dd5-d026399fae21.png')} text={text} date='02.12.2019,22:25'/>
  </div>
  <div className='sn-contetnt-btn'>
    <button className='more btn btn-danger'>Daha çox</button>
  </div>
  </div>

 )
}

export default SimilarNews
