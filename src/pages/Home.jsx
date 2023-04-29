import React from 'react';
import Image from '../components/Image';
import Onama from '../components/Onama';
import Vodici from '../components/Vodici';

const Home = () => {
  return (
    <div className="wrapper">
        <Image/>
        <Onama/>
        <Vodici/>
    </div>
  )
}

export default Home;