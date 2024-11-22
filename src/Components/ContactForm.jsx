import React from 'react';
import Contacts from '../images/Contacts.svg';

const ContactForm = () => {
    return (
        <div className='container mx-auto px-4 py-16'>
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                    <div className='text-center lg:text-left mb-8'>
                        <div className='font-bold text-2xl md:text-3xl mb-2'>Have any questions ?</div>
                        <div className='font-bold text-[#8873ef] text-2xl md:text-3xl'>Just write us a message !</div>
                    </div>
                    <img src={Contacts} alt="Contacts" className='w-full max-w-md mx-auto lg:mx-0' />
                </div>
                <div className='w-full lg:w-1/2'>
                    <form className='border-2 rounded-lg border-[#C8C8C8] p-6 max-w-md mx-auto'>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Full name</label>
                            <input type="text" name="name" className='border-b-2 border-[#C8C8C8] w-full p-2'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Phone Number</label>
                            <input type="tel" name="phoneNumber" className='border-b-2 border-[#C8C8C8] w-full p-2'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Email</label>
                            <input type="email" name='email' className='border-b-2 border-[#C8C8C8] w-full p-2'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-1'>Message</label>
                            <textarea name="message" className='border-b-2 border-[#C8C8C8] w-full p-2' rows="4"></textarea>
                        </div>
                        <button type="submit" className='font-bold border-2 w-full sm:w-auto px-4 py-2 border-[#c8c8c8] rounded-lg hover:bg-[#8873ef] hover:text-white transition-colors duration-300'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm