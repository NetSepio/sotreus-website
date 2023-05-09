import React from "react";
import "./KeyFeatures.css";
import ComprehensiveFunctionalityIcon from "../../assests/comprehensive_functionality.svg";
import EasyIntegrationIcon from "../../assests/easy_integration.svg";
import FlexibleDeploymentIcon from "../../assests/flexible_deployment.svg";
import SecurityAndPrivacyIcon from "../../assests/security_and_privacy.svg";

const KeyFeatures = () => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 py-10">
      <div className="container mx-auto space-y-12">
        <h1 style={{color:"white",fontSize:"30px",fontWeight:"bold"}}>Key Features</h1>
        <div className="flex">
        <div className="flex">
            <div>
              {" "}
              <img
                src={ComprehensiveFunctionalityIcon}
                alt=""
                className="h-10 dark:bg-gray-500 aspect-video"
              />
            </div>
            <div>
              <div className="flex flex-col  flex-1 dark:bg-gray-900">
                <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}}>
                  Comprehensive Functionality
                </h3>
                <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",width:"50%",fontSize:"13px"}} >
                  Sotreus offers a wide range of API endpoints for managing
                  various aspects of WireGuard VPN server and client
                  configurations, such as getting server and client information,
                  creating and updating client configurations, and sending
                  client configuration files via email.
                </p>
              </div>
            </div>
            </div>

          <div className="flex">
            <div>
            <img
              src={EasyIntegrationIcon}
              alt=""
              className="h-10 dark:bg-gray-500 aspect-video"
            />
            </div>
           
            <div className="flex flex-col  flex-1 dark:bg-gray-900">
              <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}} >Easy Integration</h3>
              <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",width:"50%",fontSize:"13px"}}>
                Sotreus is designed to work seamlessly with WireGuard VPN
                services, allowing users to integrate and manage their VPN
                networks with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="flex">
            <div>
              {" "}
              <img
                src={ComprehensiveFunctionalityIcon}
                alt=""
                className="h-10 dark:bg-gray-500 aspect-video"
              />
            </div>
            <div>
              <div className="flex flex-col  flex-1 dark:bg-gray-900">
                <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}}>
                  Comprehensive Functionality
                </h3>
                <div  style={{marginLeft:"30px",color:"#928888",marginTop:"10px",width:"50%",fontSize:"13px"}}>
                  Sotreus offers a wide range of API endpoints for managing
                  various aspects of WireGuard VPN server and client
                  configurations, such as getting server and client information,
                  creating and updating client configurations, and sending
                  client configuration files via email.
                </div>
              </div>
            </div>
            </div>

          <div className="flex">
            <div>
            <img
              src={EasyIntegrationIcon}
              alt=""
              className="h-10 dark:bg-gray-500 aspect-video"
            />
            </div>
           
            <div className="flex flex-col  flex-1 dark:bg-gray-900">
              <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}}>Easy Integration</h3>
              <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",width:"50%",fontSize:"13px"}}>
                Sotreus is designed to work seamlessly with WireGuard VPN
                services, allowing users to integrate and manage their VPN
                networks with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
