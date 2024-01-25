import React from 'react'
import skills_data from '../data/skill_data';

export default function Skill() {

  const skillElement = skills_data.map((skill, index) => {
    return <img className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' key={index} src={skill.skill} />
  })

  return (
    <div className='px-[60px] pt-[100px] pb-[100px] lg:px-[100px] bg-gradient-to-b from-[#050505] to-[#d8d6d6]'>
      <h1 className='text-[70px] mb-[50px] text-center font-bold text-[#ffb74d]'>SKILL</h1>
      <div className='flex justify-around gap-[10px] items-center lg:flex flex-wrap lg:gap-[20px]'>
        {skillElement}
      </div>
    </div>
  );
}