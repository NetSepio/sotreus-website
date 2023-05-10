import React from "react";
import "./KeyFeatures.css";
import ComprehensiveFunctionalityIcon from "../../assests/comprehensive_functionality.svg";
import EasyIntegrationIcon from "../../assests/easy_integration.svg";
import flexibleDeployment from "../../assests/flexible_deployment.svg";
import security from "../../assests/security_and_privacy.svg";

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
              <div className="dark:bg-gray-900">
                <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px",width:"52%"}}>
                Secure Online Browsing
                </h3>
                <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",fontSize:"13px"}} >
                Our service offers private and secure internet browsing around the world including restricted regions. Sotreus gives you encrypted internet surfing and prevents hackers and malware from accessing your data using the secure tunnel between your device and the internet.
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
           
            <div className=" dark:bg-gray-900">
              <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}} >Restricted Content</h3>
              <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",fontSize:"13px"}}>
              Avoid content restrictions and censorship by selecting an access location of your choice while deploying the dedicated network for your work/home. You are able to search the internet with complete freedom.

              </p>
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="flex">
            <div>
              {" "}
              <img
                src={flexibleDeployment}
                alt=""
                className="h-10 dark:bg-gray-500 aspect-video"
              />
            </div>
            <div>
              <div className=" dark:bg-gray-900">
                <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}}>
                Internal Applications

                </h3>
                <div  style={{marginLeft:"30px",color:"#928888",marginTop:"10px",fontSize:"13px"}}>
                Secure internal applications by deploying the dedicated network for your work/home. Using this service, Administrators can enable reliable access to on-premises applications to their coworkers or family members. The Dedicated Network can also be set up from Gateway Device which also  offers distributed cloud storage and compute services
                </div>
              </div>
            </div>
            </div>

          <div className="flex">
            <div>
            <img
              src={security}
              alt=""
              className="h-10 dark:bg-gray-500 aspect-video"
            />
            </div>
           
            <div className=" dark:bg-gray-900">
              <h3 style={{color:"white",fontWeight:"bold",marginLeft:"30px"}}>NFT Subscriptions</h3>
              <p style={{marginLeft:"30px",color:"#928888",marginTop:"10px",fontSize:"13px"}}>
              Pay using cryptocurrencies and surf the internet securely - Anonymous Browsing without sacrificing speed or bandwidth had never been this easy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
