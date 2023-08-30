import React from 'react'
import Button from './Buttons'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex py-8 md:px-20 items-center bg-white border-b-2 border-slate-300">
      <p className="text-4xl">Vestra</p>

      <div className="ml-auto flex space-x-16 text-xl items-center">
        <ul className="flex space-x-3 mr-auto">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Explore</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li>
        </ul>

        <div className="">
          <Button className="bg-primary-500 px-10 py-3 text-white rounded">Login</Button>
          <Button className="text-primary-500 px-10 py-3">Signup</Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
