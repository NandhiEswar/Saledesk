import React from 'react';
import image from "../Image/image.png";
import "../Navbar/Navbar.css"

function Home() {
  return (
      <div className="flex flex-col  justify-center items-center pt-10 bg-[#F5F5DC] gap-5">
          <h1 className='text-3xl font-sans font-bold '>Get Started with Sale desk
          </h1>
          <p className='text-black'>Data-driven systemization for seamless insights across the customer lifecycle, <br></br>available in real-time for customer-facing teams.</p>
          <button className='pill-button'>Request demo</button>
          <img src={image} alt="Centered" className="max-w-[800px] max-h-[500px] rounded-2xl" />
    </div>
  );
}

export default Home;