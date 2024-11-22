import React, { useState } from 'react';
import Logo from '../images/Logo.svg';
import LetsTalk from '../images/LetsTalk.svg';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hovered, setHovered] = useState(null);

    const items = ["Home", "Services", "Testimonial", "Contact"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#ebe7ff] py-4 md:py-0 md:h-[65px] md:mt-[40px]">
            <div className="container mx-auto px-4 md:px-[70px]">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-[41px] w-[50px] pl-[3px] mr-2" />
                        <span className="text-[#8873EF] font-bold text-xl md:text-2xl">Dr. K Kumar</span>
                    </a>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-[#8873EF] focus:outline-none"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden md:flex md:items-center space-x-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <a href="#" className="font-semibold hover:text-[#8873EF] p-2">
                                    {item}
                                </a>
                                {hovered === index && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                        <div className="w-[30px] bg-[#8873ef] h-[2px]"></div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <a href="#" className="hidden md:flex items-center">
                        <span className="px-[5px] h-[17px] font-semibold text-[14px] text-[#8873EF] mr-2">
                            Let's Talk
                        </span>
                        <img src={LetsTalk} alt="Let's Talk" className="h-[24px] w-[24px]" />
                    </a>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col items-center space-y-2">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href="#" className="font-semibold hover:text-[#8873EF] p-2 block">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                        <a href="#" className="flex items-center">
                            <span className="px-[5px] h-[17px] font-semibold text-[14px] text-[#8873EF] mr-2">
                                Let's Talk
                            </span>
                            <img src={LetsTalk} alt="Let's Talk" className="h-[24px] w-[24px]" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

