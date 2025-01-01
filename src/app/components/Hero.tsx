import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero-section">
      {/* Left Section */}
      <div id="hero-left">
        <h1 id="hero-heading">
          Save Water <br /> for <br /> Our <br /> Future Generations
        </h1>
      </div>

      {/* Right Section */}
      <div id="hero-right">
        <Image
          src="/w.png"
          alt="Save Water"
          width={600}
          height={600}
          id="hero-image"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;