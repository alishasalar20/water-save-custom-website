import React from "react";
import Image from "next/image";

const Method = () => {
  return (
    <div id="method-section">
      {/* Section: Why Save Water */}
      <div id="why-save-water">
        <h2 id="why-title">Why Save Water?</h2>
        <p id="why-description">
          Water conservation is the practice of using water efficiently to
          reduce unnecessary water usage. With the increasing global water
          scarcity, it&apos;s essential to act responsibly and conserve water
          resources for future generations.
        </p>
      </div>

      {/* Section: Ways to Save Water */}
      <div id="ways-to-save">
        <h3 id="ways-title">Ways to Save Water</h3>
        <ul id="ways-list">
          <li>Fix leaks and drips immediately.</li>
          <li>Shorten your shower time.</li>
          <li>Turn off the tap when brushing teeth or washing dishes.</li>
          <li>Water plants early in the morning or late in the evening.</li>
        </ul>
      </div>

      {/* Section: Global Impact */}
      <div id="global-impact">
        <h3 id="impact-title">Global Impact of Water Waste</h3>
        <p id="impact-description">
          Water waste affects agriculture, drinking water supply, and the
          overall economic stability of a nation. As water becomes scarcer,
          more areas will face droughts and crop failures, impacting local
          economies.
        </p>
      </div>

      {/* Section: Take Action */}
      <div id="take-action">
        <h3 id="action-title">Take Action</h3>
        <p id="action-description">
          Join local programs and take responsibility in your daily life to
          ensure water conservation for future generations. Every small action
          can make a big difference in conserving this precious resource.
        </p>
      </div>

      {/* Image */}
      <div id="water-image">
        <Image
          src="/w2.png"
          alt="Water Conservation"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default Method;