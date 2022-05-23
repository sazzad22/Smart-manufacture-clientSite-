import React from "react";
import OverlayImage from "../../images/bgwire.jpg";

const OverlayImg = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{
            backgroundImage: `url(${OverlayImage})`,
            backgroundSize: 'cover',
            backgroundBlendMode:'lighten'
        }}
      >
        <div class=" hero-overlay bg-opacity-30"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-3xl lg:text-5xl font-bold text-white underline">Grow Your Business With us</h1>
            <p class="mb-5 font-semibold ">
            Smart Menufacturer is recognized by our customers for their quality and consistency.We have  experienced team of application engineers works with our customers to develop innovative solutions and provide application support.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayImg;
