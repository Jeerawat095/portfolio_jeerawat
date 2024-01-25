import React from 'react'
import profile from '../assets/profile.jpg'
import Typewriter from './typing'

export default function Banner() {

  return (
        <div className='text-white pt-[110px] flex justify-between lg:flex-row flex-col-reverse lg:mx-[30px] lg-gap-[160px] gap-[20px] lg:text-start items-center text-center'>
          <div className='lg:w-[50%] w-full'>
            {/* <h2 className='lg:text-[60px] text-[40px] font-bold whirespace-pre-wrap'><span className='text-[#ffb74d]'>Welcom</span> to my Portfolio Website</h2> */}

            <h1 className='lg:text-[25px] text-[20px] font-bold whirespace-pre-wrap'><span className='text-[#ffb74d] text-[30px] lg:text-[40px]'>Welcom</span><Typewriter text=" to my Portfolio Website" delay={100} infinite /></h1>
            <p className='py-[40px] text-[20px] text-[#eeeeee]'>Hello I am Jeerawat. Junior Web Developer. Here I am presenting my Project and Skill</p>
            <button className="sm:w-[150px] sm:h-[40px] bg-gradient-to-r from-[#424242] to-[#9e9e9e] h-[70px] w-[100px] px-[20px] py-[8px] rounded-[6px] transform hover:scale-110 transition duration-300 mb-[100px]">Contact Me</button>
          </div>
          <div className='w-[100px] h-[120px] lg:w-[200px] lg:h-[230px] mt-[10px] sm:mb-[70px] mb-[60px] flex justify-between lg:flex-row flex-col-reverse items-center'>
            <img className='rounded-full transform hover:scale-110 transition duration-200 w-[150px] h-[250px]' src={profile} alt="" />
          </div>
        </div>
    
  )
}
