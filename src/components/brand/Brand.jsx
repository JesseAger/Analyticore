import React from 'react';
import './brand.css';
import './import'
import { google, slack, dropbox } from './import';


const brand = () => {
  return (
    <div className='dpr__brand section__padding'>
      <div>
        <img src= {google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>      
      <div>
        <img src={dropbox} alt="shopify" />
      </div> 
    </div>
  )
}

export default brand
