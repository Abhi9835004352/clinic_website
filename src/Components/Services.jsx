import React from 'react'
import I1 from '../images/services/SoftTissue.svg';
import I2 from '../images/services/orthopedics.svg';
import I3 from '../images/services/urinary.svg';
import I4 from '../images/services/utherine.svg';
import I5 from '../images/services/oncology.svg';
import I6 from '../images/services/dental.svg';
import I7 from '../images/services/generalConsultancies.svg';
import I8 from '../images/services/ticks.svg';
import I9 from '../images/services/oldageDogs.svg';

const Services = () => {
    const items = [
        { id: "Soft tissue Surgery", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I1 },
        { id: "Orthopedic surgery", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I2 },
        { id: "Urinary obstruction surgery", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I3 },
        { id: "Uterine surgery", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I4 },
        { id: "Surgical oncology", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I5 },
        { id: "Dental surgery", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I6 },
        { id: "General services", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I7 },
        { id: "Ticks treatment", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I8 },
        { id: "Old Age Disease", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", src: I9 },
    ]
    return (
        <div className='px-4 md:px-[80px] py-16'>
            <div className='font-bold text-2xl md:text-3xl text-center mb-12'>
                Our <span className='text-[#8873ef]'>Main Services</span> Categories
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {items.map((item, index) => (
                    <a href="#" className='bg-[#eeeeee] rounded-[28px] p-6 hover:bg-[#8873ef] group transition-colors duration-300' key={index}>
                        <img src={item.src} alt={item.id} className='w-20 h-20 mb-4' />
                        <div className='font-bold text-lg mb-2 group-hover:text-[#ffffff] transition-colors duration-300'>{item.id}</div>
                        <div className='text-sm text-[#757575] group-hover:text-[#ffffff] transition-colors duration-300'>{item.text}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Services

