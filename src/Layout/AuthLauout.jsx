import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import "./Layout.css"

function DefaltLauout({ children }) {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navitem = [
    {
      label: 'Login',
      link: '/login'
    },
    {
      label: 'Signup',
      link: '/signup'
    },
    {
      label: 'Client Info',
      link: '/clientinfo'
    },
    {
      label: 'Dogs Info',
      link: '/dogsinfo'
    },
    {
      label: 'Dashboard',
      link: '/dashboard'
    },
  ]
// border-b border-[#000] border-opacity-[0.3]
  return (
    <>
      {/* navigation bar */}
      <header className=''>
        <nav className='container flex justify-between items-center min-h-16 w-full'>
          <Link to="/" className="font-semibold text-[17px] sm:text-[20px]">Clientprofile</Link>
          <ul className={`flex gap-7 ${isMenuOpen ? 'open' : ''}`}>
            {navitem.map((item) => {
              return <li className=''><NavLink to={item.link} className={({ isActive }) => {
                return isActive ? 'border-b border-[#ea660b] hover:text-[#ea660b] text-[#ea660b] text-[14px] sm:text-[16px]' : 'text-[14px] sm:text-[16px] hover:text-[#ea660b]'
              }
              }>{item.label}</NavLink></li>
            })}
          </ul>
          <button className='ms-1 sm:ms-0 menu' onClick={toggleMenu}><IoMenuOutline className='text-[25px] md:text-[26px]' /></button>
        </nav>
      </header>
      {/* inner content */}
      {children}
    </>
  )
}

export default DefaltLauout
