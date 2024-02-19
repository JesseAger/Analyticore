import React from 'react'

import {Blog, Footer, Features, Header, Possibility, About} from './containers';
import {CTA, Navbar, Brand} from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <About />
    <Features />
    <Possibility/>
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}

export default App
