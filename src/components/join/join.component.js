import React from 'react'
import './join.component.css'

function Join() {
 return (
  <div className='join-content'>
   <img className='join-img' alt='' src={require('../../testxeber_logo.svg')} />
   <div className='join-text'>Abunə ol<br/>
   Son xəbərləri qaçırma</div>
   <form className='join-form'>
   <input type='email' className='form-control' placeholder='Email...'/>
   <button className='btn join-btn'><img alt='' src={require('../../svgs/join.svg')}/></button>
   </form>
  </div>
 )
}

export default Join
