import React from 'react'
import "../Navbar/Navbar.css"

function Main() {
    return (
      <section>
      <div className='h-full w-full bg-red-800'>
          <div className='flex flex-col items-center justify-center text-center py-20 px-10 '>
              <h1 className='text-6xl text-white font-sans leading-relaxed'>Supercharge Your Sales – Smarter, Faster, Stronger Sales <span className='text-blue-500 '>SaleDesk Software</span></h1>
              <p className='text-white py-10 text-xl font-sans'>Maximize sales efficiency with automated workflows, advanced sales insights, integrated communication, and powerful automation.</p>

              <button className='p-3 px-10 rounded-full text-black bg-white'>Request demo</button>
          </div>
          
    </div>
        <div className='flex fle-col text-gray-400 justify-between px-10 py-20'>
        <h1>This is the text on the left side </h1>
        <p>this is the text on  the right side </p>
            </div>
            </section>
  )
}
 
export default Main