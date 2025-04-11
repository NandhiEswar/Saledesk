import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="h-20 w-full bg-white flex flex-row justify-between items-center px-20 shadow-2xl">
        <img src="https://sconexsoft.com/images/logo-1.png" alt="Logo" />
        <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300">
          Request demo
        </button>
      </div>
      <hr className="h-1 bg-red-700" />
    </div>
  );
}

export default Navbar;