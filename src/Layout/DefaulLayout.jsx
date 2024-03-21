import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import "./Layout.css"
import { useSystem } from '../Hooks/useSystem';
import { useWhishlistSystem } from '../Hooks/useSystem';

function DefaltLauout({ children }) {

  const { cart, handleCart } = useSystem();
  const { wishlist, setWishlist } = useWhishlistSystem();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navitem = [
    {
      label: 'Home',
      link: '/home'
    },
    {
      label: 'About Us',
      link: '/about'
    },
    {
      label: 'Contact Us',
      link: '/contact'
    },
    {
      label: 'Sign Up',
      link: '/signup'
    },
  ]

  return (
    <>
      {/* navigation bar */}
      <header className='border-b border-[#000] border-opacity-[0.3]'>
        <nav className='container flex justify-between items-center min-h-16 w-full'>
          <Link to="/" className="font-semibold text-[16px] sm:text-[20px]">Exclusive</Link>
          <ul className={`flex gap-7 ${isMenuOpen ? 'open' : ''}`}>
            {navitem.map((item) => {
              return <li className=''><NavLink to={item.link} className={({ isActive }) => {
                return isActive ? 'border-b border-[#DB4444] hover:text-[#DB4444] text-[#DB4444] font-normal text-[14px] sm:text-[16px]' : 'text-[#000] text-[14px] sm:text-[16px] font-normal hover:text-[#DB4444]'
              }
              }>{item.label}</NavLink></li>
            })}
          </ul>
          <div className='flex items-center gap-x-4 sm:gap-x-6'>
            <div className='flex items-center md:rounded gap-2 px-1 sm:px-2 py-1 lg:py-[6px] bg-[#F5F5F5] search_bar'>
              <input className='bg-[#F5F5F5] text-[12px] sm:text-[13px] font-normal w-[110px] sm:w-[170px]' type="text" placeholder='What are you looking for?' />
              <button><AiOutlineSearch className='text-base md:text-[18px] lg:text-[20px]' /></button>
            </div>
            <Link to="/wishlist" className='whishlist_icon relative flex items-center'>
              <button><FiHeart className='text-base md:text-[18px] lg:text-[20px]' /></button>
              <span className="bg-[#DB4444] text-[#ffffff] text-center w-[15px] h-[15px] text-[11px] rounded-full absolute">{wishlist.length}</span>
            </Link>
            <Link to="/cart" className='cart_icon flex'>
              <GrCart className='text-base md:text-[18px] lg:text-[20px]' />
              <span className="bg-[#DB4444] text-[#ffffff] text-center w-[15px] h-[15px] text-[11px] rounded-full">{cart.length}</span>
            </Link>
            <button><MdOutlineAccountCircle className='text-[20px] sm:text-[22px]' /></button>
          </div>
          <button className='ms-1 sm:ms-0 menu' onClick={toggleMenu}><IoMenuOutline className='text-[25px] md:text-[26px]' /></button>
        </nav>
      </header>
      {/* inner content */}
      {children}
      {/* footer */}
      <footer className='bg-[#000] text-[#FAFAFA] mt-24'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 py-10">
          <div className='flex flex-col gap-2'>
            <Link to="/" className="font-semibold text-[19px]">Exclusive</Link>
            <h2 className='font-normal text-[17px]'>Subscribe</h2>
            <p className='font-light text-[14.5px]'>Get 10% off your first order</p>
            <div className='flex justify-start'>
              <Link to="" className='flex items-center justify-center border px-2 py-1 w-[180px] search_bar'>
                <input className='bg-[#000] inline-block w-[100%] font-normal text-[14.5px]' type="email" placeholder="Enter your email" />
                <button><LuSendHorizonal /></button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-normal text-[17px]'>Support</h2>
            <p className='font-light text-[14.5px] w-[75%]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className='font-light text-[14.5px]'>exclusive@gmail.com</p>
            <p className='font-light text-[14.5px]'>+88015-88888-9999</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className='flex flex-col gap-2'>
              <h2 className='font-normal text-[17px]'>Account</h2>
              <NavLink to="/myaccount" className={({ isActive }) => { return isActive ? 'text-[#DB4444]' : 'font-light hover:text-[#DB4444] text-[14.5px]' }}>My Account</NavLink>
              <NavLink className='font-light hover:text-[#DB4444] text-[14.5px]'to="/login">Login / Register</NavLink>
              <NavLink className={({ isActive }) => { return isActive ? 'text-[#DB4444]' : 'font-light hover:text-[#DB4444] text-[14.5px]' }} to="/cart">Cart</NavLink>
              <NavLink className={({ isActive }) => { return isActive ? 'text-[#DB4444]' : 'font-light hover:text-[#DB4444] text-[14.5px]' }} to="/wishlist">Whishlist</NavLink>
              <NavLink className={({ isActive }) => { return isActive ? 'text-[#DB4444]' : 'font-light hover:text-[#DB4444] text-[14.5px]' }} to="/home">Shop</NavLink>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='font-normal text-[17px]'>Quick Link</h2>
              <Link className='font-light hover:text-[#DB4444] text-[14.5px]'>Privacy Policy</Link>
              <Link className='font-light hover:text-[#DB4444] text-[14.5px]'>Terms Of Use</Link>
              <Link className='font-light hover:text-[#DB4444] text-[14.5px]'>FAQ</Link>
              <NavLink className={({isActive})=>{ return isActive ? 'text-[#DB4444]' : 'font-light hover:text-[#DB4444] text-[14.5px]'}} to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-normal text-[17px]'>Download App</h2>
            <p className='font-light text-[14.5px]'>Save $3 with App New User Only</p>
            <div className='flex gap-2'>
              <img src={Qrcode} alt="" />
              <div className='flex flex-col gap-2'>
                <Link to="/"><img src={GooglePlay} alt="" /></Link>
                <Link to="/"><img src={AppStore} alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='pb-4'>
          <p className='text-center font-light text-[14.5px]'>@Copyright Rimel 2024. All Right Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default DefaltLauout
