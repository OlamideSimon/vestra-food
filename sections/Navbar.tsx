import React from 'react'
import Button from '../components/Buttons'
import Link from 'next/link'
import { HiBars3 } from 'react-icons/hi2'

const Navbar = () => {
  return (
    <nav className="flex py-8 px-10 sm:px-5 md:px-20 items-center bg-white border-b-2 border-slate-300">
      <p className="text-4xl">Vestra</p>

      <div className="hidden md:flex ml-auto space-x-10 md:space-x-16 text-xl items-center">
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

        <div className="flex">
          <Button className="bg-primary-500 px-10 py-3 text-white rounded">Login</Button>
          <Button className="text-primary-500 px-10 py-3">Signup</Button>
        </div>
      </div>

      <div className="md:hidden ml-auto">
        <HiBars3 />
      </div>
    </nav>
  )
}

export default Navbar
