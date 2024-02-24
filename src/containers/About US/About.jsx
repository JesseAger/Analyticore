import React from 'react';
import {Feature} from '../../components';
import './about.css';


const About = () => {
  return (
    <div className='dpr__about section__margin' id='wdpr'>
        {/* <div className='dpr__about-feature '>
          <Feature title= "Analyticore" text="This is a collabration of top data scientists dedicated to provide you,  our client, the best insights on you data and there is only one way to find out"/>
        </div> */}
        <div className='dpr__about-header'>
          <h1 className='gradient__text'>AnalytiCore is the dream come true for all data enthusiasts</h1>
          
        </div>
      <div className='dpr__about-container tracking-in-expand'>
        <Feature title= "Data" text= "The microscopic building blocks of digital reality, quietly whispering the stories of our digital existence. It is the curency of algorithms, language of the machines; and we speak it fluently" />
        <Feature title= "Analysis" text= "Analysis is the alchemy of knowledge, where raw data is transmuted into actionable intelligence, guiding decisions and shaping outcomes."/>
        <Feature title= "Information" text= "Information is the cosmic code, waiting to be decrypted by the curious minds who seek to unravel the mysteries of the universe. It is the invisible ink that inscribes the story of our world onto the canvas of consciousness, inviting us to read between the lines and discover the hidden truths that lie beneath the surface."/>
        <Feature title= "Intelligence" text= "Intelligence is the beacon of brilliance, illuminating the path to understanding and innovation. It is the kaleidoscope of cognition, reflecting the complexities of thought and perception. It is the very final output of data derived from application of knowledge and information."/>
      </div>
    </div>
  )
}

export default About
