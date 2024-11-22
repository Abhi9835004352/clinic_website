import React from 'react'
import HeroProfile from '../images/HeroProfile.svg'
import LetsTalk from '../images/LetsTalkWhite.svg'

const HeroSection = () => {
  return (
    <div className='relative p-4 md:p-8 min-h-[500px] flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 md:pr-8 mb-8 md:mb-0'>
            <div className='font-bold text-2xl md:text-3xl mb-2'>Welcome to </div>
            <div className='font-extrabold text-3xl md:text-4xl text-[#8873ef] mb-2'>Dr. Kaushlendra Kumar</div>
            <div className='font-bold text-xl md:text-2xl mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, et.</div>
            <div className='font-normal text-gray-500 text-sm md:text-base mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nostrum minus itaque atque modi similique illo a! Natus, quaerat provident!</div>
            <div className='bg-[#8873ef] h-[44px] w-full md:w-[261px] rounded-[8px]'>
                <a href="#" className='flex justify-center items-center h-full'>
                    <span className='font-semibold text-base md:text-lg text-white px-1'>Book an Appointment</span>
                    <img src={LetsTalk} alt="Lets Talk" className='h-[24px] w-[24px] ml-2' draggable="false"/>
                </a>
            </div>
        </div>

        <div className='w-full md:w-1/2'>
            <img src={HeroProfile} alt="Hero Profile" className='w-full h-auto'/>
        </div>
    </div>
  )
}

export default HeroSection

