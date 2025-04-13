import React from "react";

const CustomTextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className="text-primary border-solid border-primary border-[1px] 
        rounded-[1.5vw] md:rounded-[1vw] xl:rounded-[0.62vw] 
        w-full
        font-tenor 
        text-[3.5vw] md:text-[2vw] xl:text-[1.56vw]
        mt-[2vw] md:mt-[1.2vw] xl:mt-[0.78vw]
        px-[3vw] md:px-[2vw] xl:px-[1.67vw]
        pt-[3vw] md:pt-[2vw] xl:pt-[1.15vw]
        pb-[10vw] md:pb-[7vw] xl:pb-[5.2vw]
        resize-none
        bg-transparent
        outline-none
        placeholder:text-primary"
    />
  );
};

export default CustomTextArea; 