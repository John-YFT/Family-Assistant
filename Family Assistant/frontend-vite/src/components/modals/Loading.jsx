// Значок загрузки на всю страницу
import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex items-center justify-center">
        <PulseLoader 
          color="#781C69" 
          size={25} 
          margin={4}
          className="md:scale-75 xl:scale-50" // Для планшетов уменьшаем до 75%, для десктопов до 50% от мобильного размера
        />
      </div>
    </div>
  );
};

export default Loading;
