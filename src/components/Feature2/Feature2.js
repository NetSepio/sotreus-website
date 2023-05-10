import React from "react";

const Feature2 = () => {
return(
<div
id="features"
className="flex flex-col items-center justify-start scroll-mt-16 lg:scroll-mt-0 mb-36 lg:mb-12"
>
<div className="mb-2 font-figtree lg:w-[40%] md:w-[60%] w-[85%] text-center">
  <h2
    initial="hidden"
    className="font-bold text-4xl lg:text-5xl mb-2 lg:mt-36  text-gray-200"
  >
    Key Features
  </h2>
  <h1
    initial="hidden"
    className="text-xl lg:text-xl font-figtree opacity-50 text-gray-600 text-center lg:mb-24 mb-12"
  >
    Be a part of it.
  </h1>
</div>
<div className="lg:w-[60%] w-[60%] lg:ml-16">
  <div
    initial="hidden"
    className="flex lg:mb-12 lg:flex-row flex-col justify-center items-start"
  >
    <div className="flex lg:w-[50%] lg:mb-0 mb-4">
      <span className="text-4xl mr-6">⛓</span>
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-xl">
        Secure Online Browsing
        </h1>
        <p className="text-gray-600 lg:w-[80%]">
        Our service offers private and secure internet browsing around the world including restricted regions. Sotreus gives you encrypted internet surfing and prevents hackers and malware from accessing your data using the secure tunnel between your device and the internet.

        </p>
      </div>
    </div>
    <div className="flex lg:w-[50%] lg:mb-0 mb-4">
      <span className="text-4xl mr-6">⚡️</span>
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-xl">
        Restricted Content
        </h1>
        <p className="text-gray-600 lg:w-[80%]">
        Avoid content restrictions and censorship by selecting an access location of your choice while deploying the dedicated network for your work/home. You are able to search the internet with complete freedom.

        </p>
      </div>
    </div>
  </div>
  <div
    initial="hidden"
    className="flex lg:mb-12 lg:flex-row flex-col justify-center items-start"
  >
 
    <div className="flex lg:w-[50%] lg:mb-0 mb-4">
      <span className="text-4xl mr-6">🌐</span>
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-xl">
        Internal Applications
        </h1>
        <p className="text-gray-600 lg:w-[80%]">
        Secure internal applications by deploying the dedicated network for your work/home. Using this service, Administrators can enable reliable access to on-premises applications to their coworkers or family members. The Dedicated Network can also be set up from Gateway Device which also  offers distributed cloud storage and compute services

        </p>
      </div>
    
  
  </div>
 
    <div className="flex lg:w-[60%] lg:mb-0 mb-4">
      <span className="text-4xl mr-6">🖼</span>
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-xl">
          NFT Subscriptions
        </h1>
        <p className="text-gray-600 lg:w-[80%]">
          Pay using cryptocurrencies and surf the internet securely -
          Anonymous Browsing without sacrificing speed or bandwidth had
          never been this easy.
        </p>
      </div>
    </div>
  </div>
  </div>
</div>

)
}
export default Feature2;
