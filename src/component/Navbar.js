import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-blue-700/20">
      <ul className="flex text-white gap-2 mx-4">
        <li className="text-xl">
          <a href="/">Home</a>
        </li>
        <li className="text-xl">
          <a href="/Photos">Photos</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar