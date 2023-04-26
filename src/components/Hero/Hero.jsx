import React from 'react';
import './Hero.css';
import Vector18 from '../../assests/vector-18.svg';
import Vector19 from '../../assests/vector-19.svg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={Vector18} alt="Vector 18" className="vector-18" />
      <img src={Vector19} alt="Vector 19" className="vector-19" />
      
      <div className="content-overlay">
        <h1 className="hero-heading">Stay Anonymous Online</h1>
        <p className="hero-subheading">DNS-based firewall that blocks unwanted ads, trackers, and malware.</p>
        <div className="frame-33">
          <span className="cta-text">Get Sotreus VPN now</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
