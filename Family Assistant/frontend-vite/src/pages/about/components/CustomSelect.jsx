import React, { useState } from "react";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary border-solid border-primary border-[1px] rounded-[0.62vw]
        font-tenor text-[1.3vw]
        mt-[0.78vw]
        py-[1.15vw]
        px-[1.67vw]
        w-full
        text-left
        flex items-center justify-between"
      >
        {selectedOption}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute w-full mt-[0.1vw] bg-white border border-primary rounded-[0.62vw] z-50">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="text-primary font-tenor text-[1.3vw] px-[1.67vw] py-[1.15vw] hover:bg-stroke cursor-pointer transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect; 