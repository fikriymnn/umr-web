"use client";
import { set } from "date-fns/esm/fp";
import { useState } from "react";

function DropdownDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (clickedGender) => {
    setGender(clickedGender);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center px-2 py-3 mt-1 text-gray-800 border border-gray-300 rounded-lg  focus:outline-none focus:ring w-full"
      >
        <span className="text-xs text-gray-400">{gender}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-4 h-4 ml-2 ${isOpen ? "transform rotate-180" : ""}`}
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
          <button
            href="#"
            className="block px-4 py-2 text-gray-800 "
            onClick={() => handleClick("Laki-Laki")}
          >
            Laki-Laki
          </button>
          <button
            href="#"
            className="block px-4 py-2 text-gray-800 "
            onClick={() => handleClick("Perempuan")}
          >
            Perempuan
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownDetail;
