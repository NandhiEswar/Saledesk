import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
      <div>
          <div className='h-20 w-full bg-white flex flex-row justify-between items-center px-20 shadow-2xl'>
              <img src="https://sconexsoft.com/images/logo-1.png"  />
              <button className='pill-button'>Request demo</button>
             
          </div>
          <hr className='h-1 bg-red-700'/>
    </div>
  )
}

export default Navbar