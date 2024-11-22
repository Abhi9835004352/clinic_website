import React from 'react'
import Call from '../images/call_logo.svg'
import Message from '../images/message_logo.svg'
import Location from '../images/location_logo.svg'
import Whatsapp from '../images/whatsapp_logo.svg'
import Facebook from '../images/facebook_logo.svg'
import Instagram from '../images/instagram_logo.svg'

const TopNav = () => {
    return (
        <div className="hidden md:block md:fixed md:top-0 md:left-0 md:right-0 md:z-50 bg-[#8873EF] text-white">
            <div className='flex justify-between px-[85px] items-center h-[40px]'>
                <ul className='flex gap-4 font-bold items-center'>
                    <li className='flex items-center'>
                        <img src={Call} alt="Call logo" className='h-6 w-6 mr-1'/>
                        <span>Call: +917209333695</span>
                    </li>
                    <li className='flex items-center'>
                        <img src={Message} alt="Message logo" className='h-6 w-6 mr-1'/>
                        <span>abhishekforitutor@gmail.com</span>
                    </li>
                    <li className='flex items-center'>
                        <img src={Location} alt="Location logo" className='h-6 w-6 mr-1'/>
                        <span>Near Bulla Shahid, Lakhibag Manpur Gaya</span>
                    </li>
                </ul>

                <ul className='flex h-6 gap-3'>
                    <li>
                        <a href="#"><img src={Facebook} className='h-6'/></a>
                    </li>
                    <li>
                        <a href="#"><img src={Whatsapp} className='h-6'/></a>
                    </li>
                    <li>
                        <a href="#"><img src={Instagram} className='h-6'/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopNav

