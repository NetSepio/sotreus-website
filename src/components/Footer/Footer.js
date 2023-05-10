import React from "react";
import "./Footer.css";
import logo from "../../assests/group-64.svg";
import FacebookIcon from "../../assests/icsharpfacebook.svg";
import Group54Icon from "../../assests/group-54.svg";
import Group55Icon from "../../assests/group-55.svg";

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
          <div className="footer-icons">
            <img className="footer-facebook" src={FacebookIcon} alt="Facebook" />
            <img className="footer-group-54" src={Group54Icon} alt="Twitter" />
            <img className="footer-group-55" src={Group55Icon} alt="Discord" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;