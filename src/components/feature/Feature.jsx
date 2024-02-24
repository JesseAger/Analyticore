import React from 'react';
import './feature.css';


const feature = ({title, text}) => {
  return (
    <div className='dpr__features-container__feature'>
    <div className='dpr__features-contaniners__feature-title'>
      <div />
      <h1>{title}</h1>
    </div>
    <div className='dpr__features-containers__feature-text'>
      {text}
    </div>
    </div>
  )
}

export default feature
