import React from 'react';
import Image from 'next/image';

const Info = () => {
  return (
    <div id="info-section">
      {/* Heading */}
      <h1 id="info-heading">Information</h1>

      {/* Content Section */}
      <div id="info-content">
        {/* Text Content */}
        <div id="info-text">
          <p>
            <strong>Water Waste and Its Global Impact:</strong> Water wastage is a growing issue that affects agriculture, the economy, and global ecosystems. According to the United Nations, approximately 70% of the world’s freshwater is used for agriculture, and a substantial portion of this is wasted due to poor irrigation practices and inefficient water management.
          </p>
          <p className="mt-4">
            It&apos;s estimated that in some areas, 40-50% of irrigation water never reaches the crops. This has a significant impact on crop yield and food production.
          </p>
          <p className="mt-4">
            As a result, regions that rely on agriculture for their livelihoods are seeing droughts, crop failures, and loss of productivity. For example, the California drought of 2015 resulted in a $2.7 billion loss in crops. The problem is also exacerbated by the over-extraction of groundwater, which has led to sinking water tables in some areas, making water more difficult to access for farming.
          </p>
        </div>

        {/* Image */}
        <div id="info-image">
          <Image
            src="/clean.png"
            alt="Water Waste"
            width={350}
            height={350}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Info;