import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imges/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center bg-slate-800'>
            <div className='flex w-full justify-between p-5'>
                    <Link className='text-sm text-amber-400 font-bold uppercase text block z-50' to='/'>
                    <img className='h-12' src={logo} alt="" />
                    </Link>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                    <div>
                        <div className='bg-amber-500 w-5 h-1'></div>
                        <div className='bg-amber-500 w-5 h-1 mt-1'></div>
                        <div className='bg-amber-500 w-5 h-1 mt-1'></div>
                    </div>
                </div>
            </div>
            <ul className={`md:flex justify-end gap-5 absolute p-5 md:static bg-slate-800 w-full duration-500 ease-in ${open ? 'top-16' : 'top-[-120px]'}`}>
                <Link className=' text-amber-400 font-bold uppercase text block' to='/'>Home</Link>
                <Link className=' text-amber-400 font-bold uppercase text block' to='/statics'>Statics</Link>
                <Link className=' text-amber-400 font-bold uppercase text block' to='/contact'>Contact</Link>
                <Link className=' text-amber-400 font-bold uppercase text block' to='/blogs'>Blogs</Link>
            </ul>
        </div>
    );
};

export default Navbar;