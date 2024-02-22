import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import analytic from '../../assets/analytic.png'




const header = () => {
  return (
    <div dpr__header section__padding>
    <div className='dpr__header-content'>
      <h1 className='gradient__text'>
  Welcome to the analytics alchemy, <br/>
  where data speaks volumes
      </h1>
      <p>
        It takes us and only us to make you realize
        that the most powerful tool in the digital world is data; <br />
        your data plus our expertise equals limitless possibilites
        and unprecedented generation of <br />information and intelligence.
        An investment you will never regret! 
      </p>
      <div className='dpr__header-content__input'>
        <input type="email" placeholder='Your email address' required />
        <button type='button'>Get Started</button>
      </div>
      <div className='dpr__header-content_people'>
        <img src={people} alt="people" />
        <p>1600 people requested 24hr access to our resources</p>
      </div>
      <div className='dpr__header-image'>
    <img src={analytic} alt="analytic"/>
      </div>
    </div>
</div>
  )
}

export default header
