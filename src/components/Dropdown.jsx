'use client';
import { useState } from 'react';


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left w-full">
            <button
                onClick={toggleDropdown}
                className="flex justify-between items-center px-4 py-2 text-gray-800 border border-gray-500 rounded-lg hover:bg-[#E3B02B] focus:outline-none focus:ring w-full"
            >

                <span>Dropdown Button</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 space-y-2 bg-white border rounded-lg shadow-md">
                    {/* Dropdown content */}
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#E3B02B]">Option 3</a>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
