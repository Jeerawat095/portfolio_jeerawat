import React, { useState } from 'react'
import Button from './Button'
import {HiMenuAlt1} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'



export default function Nav() {



    const [click, setClick] = useState('')
    const handleClick = () => setClick(!click)

    const content = <aside className='text-white fixed top-0 left-0 bottom-0 pt-[50px] bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 w-[130px] flex flex-col items-center gap-[5px]'>
        <button onClick={handleClick}>
                {click && <FaTimes className='mt-[35px] text-[28px]'/>}
        </button>

        {/* <img className='w-[100px] h-[150px]' src={logo} alt="" /> */}
        
        <ul className='flex flex-col gap-[40px] text-[20px] text-[#A6A9B8] cursor-pointer'>
            <li className="mt-[40px] transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">About</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Skill</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Project</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Contact</li>
        </ul>

    </aside>



  return (
        <nav className='flex justify-between text-white item-center lg:px-[100px] lg:py-[60px] p-[40px]'>
        <ul className='lg:flex hidden gap-[40px] text-[20px] text-[#A6A9B8] cursor-pointer'>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d] curser">About</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Skill</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Project</li>
            <li className="transition-colors duration-300 hover:scale-110 hover:text-[#ffb74d]">Contact</li>
        </ul>
        <Button className="hidden" text="Contact Now" />


        {
            <button className='lg:hidden block' onClick={handleClick}>
                {!click && <HiMenuAlt1 className='text-[28px]'/>}
            </button>
        }
        
        {click && content}

        </nav>
  )
}
