import React from 'react';
import Image from '../Components/Image';
import Onama from '../Components/Onama';
import Vodici from '../Components/Vodici';


const Home = () => {
  return (
    <div className="flex flex-col">
        <Image/>
        <Onama/>
        <Vodici/>
    </div>
  )
}

export default Home;