import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-blue-700/50">
      <ul className="flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Photos">Photos</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar