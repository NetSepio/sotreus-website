import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div className="why-us-container">
            <h2 className="why-us-title">Why Sotreus</h2>
            <div className="features-row">
                <div className="feature">
                    <h3 className="feature-title">Firewall</h3>
                    <p className="feature-description">
                        Automatically integrated with the SOTREUS Service for detecting and eliminating cyber threats which try to attack the application system while blocking any unnecessary Advertisements and Potentially Unwanted Applications(PUAs).
                    </p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="feature">
                    <h3 className="feature-title">Dedicated IP</h3>
                    <p className="feature-description">
                        Offers a dedicated IP-based virtual private network to the users for connecting their enterprise or home smart devices so that they can be accessed from anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;