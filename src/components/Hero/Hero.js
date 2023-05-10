import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <div className="hero">
      <div className="content-overlay">
        <h1 className='text-center text-white text-4xl mt-40 font-bold'>Stay Anonymous Online</h1>
        <p className='text-center text-white text-l mt-10'>DNS-based firewall that blocks unwanted ads, </p>
        <p className='text-center text-white text-l mt-1'>trackers, and malware.</p>
        <div className='text-center text-white text-l mt-10'>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Get Sotreus VPN now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
