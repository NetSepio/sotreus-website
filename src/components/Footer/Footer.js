import React from "react";
import "./Footer.css";
import logo from "../../assests/group-64.svg";
import { SocialIcon } from "react-social-icons";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left-side">
          <div className="frame-56">
            <div className="flex space-x-2">
              <div className="logo_container">
                <img src={logo} alt="Logo" className="logo rounded-full" />
              </div>
              <div>
              <div style={{color:"white",fontWeight:"bold",fontSize:"17px"}} className="mt-2">Sotreus</div>
            
            <div className="footer-description" style={{marginTop:"10px"}}>
              Sotreus is a fast and easy-to-use VPN service that protects internet
              activities from cyber threats and surveillance.
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <p className="footer-contact flex justify-center ">Contact us</p>
          <div className="flex gap-x-4 items-center mt-5">
                  <div><SocialIcon url="https://t.me/MyriadFlow" network="telegram" /></div>
                <div><SocialIcon url="https://twitter.com/0xMyriadFlow" network="twitter" /></div>
                <div><SocialIcon url="https://discord.gg/38jktRtuY7" network="discord" /></div>

              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;