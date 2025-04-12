import React from "react";

const CustomTextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className="text-primary border-solid border-primary border-[1px] rounded-[0.62vw] w-full
        font-tenor text-[1.56vw]
        mt-[0.78vw]
        px-[1.67vw]
        pt-[1.15vw]
        pb-[5.2vw]
        resize-none
        bg-transparent
        outline-none
        placeholder:text-primary"
    />
  );
};

export default CustomTextArea; 