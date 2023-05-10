import React from "react";
import "./Footer.css";
import logo from "../../assests/group-64.svg";
import { SocialIcon } from "react-social-icons";
import {
  FaFacebook,
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

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
            
            <div className=" text-center text-slate-500" style={{marginTop:"10px"}}>
            Sotreus 2023 © All rights reserved.
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <p className="footer-contact flex justify-center ">Contact us</p>
          <div className="flex gap-x-4 items-center mt-5">
          <a
                  href="https://www.facebook.com/Lazarus.Network?mibextid=LQQJ4d"
                  target={"_blank"}
                  className="text-2xl hover:text-[#4267B2]"
                >
                  <FaFacebook />
                </a>           
                <a
                  href="https://t.me/LazarusNetwork"
                  target={"_blank"}
                  className="text-2xl hover:text-[#1DA1F2]"
                >
                  <FaTelegram />
                </a>       
                <a
                  href="https://twitter.com/LazarusNetwork"
                  target={"_blank"}
                  className="text-2xl hover:text-[#1DA1F2]"
                >
                  <FaTwitter />
                </a>                
                <a
                  href="https://discord.gg/LazarusNetwork"
                  target={"_blank"}
                  className="text-2xl hover:text-[#1DA1F2]"
                >
                  <FaDiscord />
                </a>     
              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;