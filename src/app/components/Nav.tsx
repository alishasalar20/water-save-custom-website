import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav id="navbar">
      <div>
        <h1 id="logo">SaVeWaTer</h1>
      </div>
      <div>
        <ul id="nav-links">
          <li><Link href={"info"}>Information</Link></li>
          <li><Link href={"method"}>Method</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;