import React from 'react'

export default function Button({text}) {
  return (
        <button className={"bg-gradient-to-r from-[#424242] to-[#9e9e9e] h-[40px] w-[150px] px-[20px] py-[8px] hidden lg:block hover:scale-110 transition duration-200"}>{text}</button>
  )
}
