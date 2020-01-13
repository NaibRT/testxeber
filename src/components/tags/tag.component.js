import React from 'react'
import './tag.component.css'

function Tag(props) {
 return (
  <div className='tag'>
  {props.name}
  </div>
 )
}

function Tags(props) {
 return (
  <div className='news-tags'>
  <Tag name='writter'/>
  <Tag name='google'/>
  <Tag name='cekdoris'/>
  <Tag name='sosial'/>
  </div>
 )
}

export default Tag
export {Tags}
