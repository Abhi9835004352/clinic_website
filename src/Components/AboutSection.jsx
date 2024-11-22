import React from 'react'
import AboutProfile from '../images/DoctorProfile.svg'
import LetsTalkWhite from '../images/LetsTalkWhite.svg'

const AboutSection = () => {
  return (
    <div className='bg-[#eeeeee] py-8 md:py-16'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 mb-8 md:mb-0'>
                <img src={AboutProfile} alt="Doctor Profile" className='w-full h-auto'/>
            </div>
            <div className='w-full md:w-1/2 md:pl-8'>
                <div className='font-bold text-2xl md:text-3xl mb-4'>Dr. Kaushlendra Kumar</div>
                <div className='font-normal text-sm md:text-base text-[#757575] mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolorum iste quidem fugiat quasi sit architecto rerum sint delectus, fuga nihil aliquam atque maiores, nemo nisi dignissimos similique omnis accusantium inventore. Non deleniti voluptas sed perspiciatis magnam, in autem deserunt!</div>
                <div className='font-normal text-sm md:text-base text-gray-500 mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus mollitia magni, accusantium facere perferendis sapiente vel dolor aliquid ullam porro obcaecati vero dicta atque reiciendis, facilis architecto fugit nihil ipsum illo tempora autem voluptatem temporibus. Rem veritatis voluptate fuga molestias?</div>
                <div className='w-full md:w-[175px] h-[45px] bg-[#8873ef] rounded-[8px]'>
                    <a href="#" className='flex justify-center items-center h-full'>
                        <span className='font-semibold text-white text-base md:text-lg'>Learn More</span>
                        <img src={LetsTalkWhite} alt="Lets Talk" className='h-[24px] w-[24px] ml-2'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection

