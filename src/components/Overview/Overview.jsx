// Make the `overview_image`, `overview-description` & `overview-button` to be in the center of the screen like 
// Also make the component responsive for mobile devices

import React from "react";
import "./Overview.css";
import OverviewImage from "../../assests/group-58.svg";

const Overview = () => {
  return (
    <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 py-10">
      <div className="container mx-auto space-y-12">

        <h1 className="overview-heading">Overview</h1>
        <img className="overview_image" src={OverviewImage} alt=""/>

        <p className="overview-description">
          Sotreus is a powerful and user-friendly API that simplifies the management of WireGuard VPN server and client configurations. It provides a seamless interface to interact with WireGuard VPN services, enabling users to easily manage their VPN networks and configurations. By utilizing the Sotreus API, users can create, update, and delete client configurations, access server information, and even email client configuration files to their respective users.
        </p>
      
        <button className="overview-button">
          <span className="overview-button-text">
            Get VPN Now
          </span>
        </button>

      </div>
    </section>
  );
};

export default Overview;

/*
.overview_image {
    width: 805px;
    height: 799px;
}

.overview-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 308px;
    height: 65px;

    background: radial-gradient(53.2% 81.94% at 86.92% 50%, rgba(117, 226, 255, 0.5) 0%, rgba(117, 226, 255, 0) 100%), #244D61;
    border-radius: 40px;
}

.overview-button-text {
    width: 124px;
    height: 31px;

    font-family: 'Visby CF';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 31px;
    text-align: center;

    color: #FFFFFF;

    flex: none;
    order: 0;
    flex-grow: 0;
}

.overview-description {

    width: 1137px;
    height: 185px;

    font-family: 'Visby CF';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 37px;

    color: #000000;
}
*/