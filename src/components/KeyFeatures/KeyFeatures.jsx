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

        <h1 className="key-features-heading">Key Features</h1>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img src={ComprehensiveFunctionalityIcon} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="key-feature-heading">Comprehensive Functionality</h3>
            <p className="key-feature-description">
            Sotreus offers a wide range of API endpoints for managing various aspects of WireGuard VPN server and client configurations, such as getting server and client information, creating and updating client configurations, and sending client configuration files via email.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img src={EasyIntegrationIcon} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="key-feature-heading">Easy Integration</h3>
            <p className="key-feature-description">
            Sotreus is designed to work seamlessly with WireGuard VPN services, allowing users to integrate and manage their VPN networks with ease.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img src={FlexibleDeploymentIcon} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="key-feature-heading">Flexible Deployment</h3>
            <p className="key-feature-description">
            Sotreus API can be configured with different base URLs depending on the desired environment.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img src={SecurityAndPrivacyIcon} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 className="key-feature-heading">Security and Privacy</h3>
            <p className="key-feature-description">
            Sotreus is built on the secure and privacy-focused WireGuard VPN protocol, ensuring your VPN network remainsprotected and private.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default KeyFeatures;