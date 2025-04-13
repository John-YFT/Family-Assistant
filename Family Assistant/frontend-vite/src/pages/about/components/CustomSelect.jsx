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
        className="text-primary border-solid border-primary border-[1px] 
        rounded-[1.5vw] md:rounded-[1vw] xl:rounded-[0.62vw]
        font-tenor 
        text-[3.5vw] md:text-[2vw] xl:text-[1.3vw]
        mt-[2vw] md:mt-[1.2vw] xl:mt-[0.78vw]
        py-[3vw] md:py-[2vw] xl:py-[1.15vw]
        px-[3vw] md:px-[2vw] xl:px-[1.67vw]
        w-full
        text-left
        flex items-center justify-between"
      >
        {selectedOption}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="absolute w-full 
        mt-[0.5vw] md:mt-[0.3vw] xl:mt-[0.1vw] 
        bg-white border border-primary 
        rounded-[1.5vw] md:rounded-[1vw] xl:rounded-[0.62vw] 
        z-50">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="text-primary font-tenor 
              text-[3.5vw] md:text-[2vw] xl:text-[1.3vw] 
              px-[3vw] md:px-[2vw] xl:px-[1.67vw] 
              py-[3vw] md:py-[2vw] xl:py-[1.15vw] 
              hover:bg-stroke cursor-pointer transition-colors"
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