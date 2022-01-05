import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-10">
    {/* quick links */}
      <section className="py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <span className="text-base border-2 rounded-full py-1 px-2 mr-5">W</span>
            {/* links */}
            <nav className="flex-1 hidden md:flex justify-between">
              <p>Laptop</p>
              <p>Desktop</p>
              <p>All In One</p>
              <p>Monitor</p>
              <p>Keyboard</p>
              <p>Mouse</p>
              <p>Pendrive</p>
              <p>Headphone</p>
              <p>Accesories</p>
            </nav>
          </div>
        </div>
      </section>

      {/* main header */}
      <section className="py-2 bg-[#151515]">
        <div className="container">
          <div className="flex justify-between align-center">
            {/* logo */}
            <h3 className="text-2xl">TAMARIND</h3>
            {/* buttons */}
            <div className="hidden md:flex align-center gap-3">
              <p className="py-1">Overview</p>
              <p className="py-1">Tech Specs</p>
              <p className="py-1">Picture Gallery</p>
              <button className="bg-indigo-600 px-3 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;