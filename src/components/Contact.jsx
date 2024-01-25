import React from 'react'

export default function Contact() {



  return (
    <div className='px-[20px] pt-[100px] pb-[200px] lg:[pt:60px] lg:px-[50px] bg-gradient-to-b from-[#d8d6d6] to-[#6a6a6a]'>
        <h1 className='text-[70px] mb-[50px] text-center font-bold text-[#f1ab42]'>Contact</h1>
        <div className=' flex flex-col items-center text-center'>
            <a className='flex items-center' href="https://web.facebook.com/ZIKOJeerawat" target="_blank" rel="noopener noreferrer">
                <img className='pl-[20px] w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] hover:scale-110 transition duration-200' src="/image/facebook_logo.svg" alt="" />
                <h2 className='pl-[20px] lg:pl-[30px] text-[15px] lg:text-[20px] flex items-center font-bold text-[#37474f] hover:scale-110 transition duration-200'>FB : Jeerawat Wongsaree</h2>
            </a>

            <div className='flex items-center'>
                <img className='flex items-center w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] hover:scale-110 transition duration-200' src="/image/phone.svg" alt="" />
                <h2 className='pt-[5px] lg:text-center pl-[10px] lg:pl-[30px] text-[15px] lg:text-[20px] font-bold text-[#37474f]'>Tel: 095-180-9357</h2>
            </div>

            <div className='flex items-center'>
                <img className='flex items-center w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] hover:scale-110 transition duration-200' src="/image/gmail.svg" alt="" />
                <h2 className='pt-[20px] lg:text-center pl-[10px] lg:pl-[30px] text-[15px] lg:text-[20px] font-bold text-[#37474f]'>gmail: jeerawat.wongsaree@gmail.com</h2>
            </div>
        </div>
    </div>
  )
}
