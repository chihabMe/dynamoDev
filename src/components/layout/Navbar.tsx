import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
      <nav className="bg-slate-900 bg-opacity-50 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-teal-400 text-2xl font-bold tracking-tight">DynamoDev</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="#" className="text-gray-300 hover:bg-slate-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Services</Link>
                  <Link href="/#projects" className="text-gray-300 hover:bg-slate-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Projects</Link>
                  <Link href="/#pricing" className="text-gray-300 hover:bg-slate-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Pricing</Link>
                  <Link href="/#about" className="text-gray-300 hover:bg-slate-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">About</Link>
                  <Link href="#" className="text-gray-300 hover:bg-slate-700 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">Contact</Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button variant="secondary" className="bg-teal-500 text-white hover:bg-teal-600 transition duration-150 ease-in-out">
                Get Started
              </Button>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar