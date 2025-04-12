// Значок загрузки на всю страницу
import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center">
        <PulseLoader color="#781C69" size={15} margin={2} />
      </div>
    </div>
  );
};

export default Loading;
