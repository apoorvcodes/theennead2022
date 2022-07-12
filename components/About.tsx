import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div className='flex space-y-36 md:space-x-0 p-24 flex-col-reverse justify-center items-center mdjustify-center md:flex-row min-h-screen md:p-36 bg-mainbg'>
         <div className='flex flex-col justify-center items-start'>
             <div className='text-7xl pt-6 md:pt-0 md:text-9xl font-bold'>Who</div>
             <div className='text-7xl md:text-9xl font-bold '>We</div>
             <div className='text-7xl md:text-9xl font-bold'>Are<span className='text-prime'>?</span></div>
             <div className="divider w-full md:w-2/3 ">?</div>
             <div className='text-lg p-2 w-full md:w-2/3 text-cream '>In the spirit of promoting youth led events, Sunbeam Bhagwanpur is proud to host its first edition of The Ennead Model United Nations organised in full capacity by the MUN Club of Bhagwanpur.</div>
          </div>
          <Image width={2000} height={1500} className="pl-12 pr-12 pb-12 md:p-0" src={require("../public/img/group_pic.png")}/>
    </div> 
  )
}

export default About