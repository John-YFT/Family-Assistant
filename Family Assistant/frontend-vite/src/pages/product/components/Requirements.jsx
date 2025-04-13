import React, { useState, useEffect } from "react";
import axios from "axios";
import Mark from "../../../components/modals/Mark";
import { $host } from "../../../http";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StarRating = ({ rating = 0 }) => {
  const stars = [0, 1, 2, 3, 4];
  console.log('StarRating получил рейтинг:', rating);
  
  return (
    <div className="flex gap-[0.89vw] mt-[1.04vw]">
      {stars.map((_, index) => (
        <svg
          key={index}
          width="2.6vw"
          height="2.6vw"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`star-fill-${index}`}>
              <stop offset={`${Math.min(Math.max((rating - index) * 100, 0), 100)}%`} stopColor="#F0B9E7" />
              <stop offset={`${Math.min(Math.max((rating - index) * 100, 0), 100)}%`} stopColor="white" />
            </linearGradient>
          </defs>
          <path
            d="M25 2.5L31.8375 16.3625L47.5 18.5125L36.25 29.4875L38.675 45.075L25 37.7125L11.325 45.075L13.75 29.4875L2.5 18.5125L18.1625 16.3625L25 2.5Z"
            fill={`url(#star-fill-${index})`}
            stroke="#781C69"
            strokeWidth="5"
          />
        </svg>
      ))}
    </div>
  );
};

const DownloadChart = ({ data }) => {
  console.log('DownloadChart получил данные:', data);
  const chartData = data.map(item => ({
    date: new Date(item.date).toLocaleDateString('ru-RU'),
    downloads: Number(item.kolvo)
  }));

  return (
    <div className="w-full h-[20vw] mt-[2vw]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis tickFormatter={(value) => Math.round(value)} />
          <Tooltip formatter={(value) => [Math.round(value), "Скачиваний"]} />
          <Line type="monotone" dataKey="downloads" stroke="#781C69" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Requirements = () => {
  const [rating, setRating] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [downloadStats, setDownloadStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ratingResponse = await $host.get("api/ratings/get-average-rating");
        console.log('Получены данные рейтинга:', ratingResponse.data);
        
        const { average } = ratingResponse.data;
        if (average) {
          const numericRating = Number(average);
          console.log('Преобразованный рейтинг:', numericRating);
          setRating(numericRating);
        } else {
          console.log('Нет данных о среднем рейтинге');
          setRating(0);
        }

        const downloadResponse = await $host.get("api/dowloadCount/get-downloadcount");
        console.log('Получены данные о скачиваниях:', downloadResponse.data);
        setDownloadStats(downloadResponse.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);

    setTimeout(async () => {
      setIsDownloading(false);
      setShowRatingModal(true);

      try {
        const today = new Date().toISOString().split("T")[0];
        await $host.post("api/dowloadCount/incr-download", { date: today });

        const updatedData = await $host.get("api/dowloadCount/get-downloadcount");
        console.log('Обновленные данные о скачиваниях:', updatedData.data);
        setDownloadStats(updatedData.data);
      } catch (error) {
        console.error("Ошибка при обновлении скачиваний:", error);
      }
    }, 5000);
  };

  const handleCloseRatingModal = () => {
    setShowRatingModal(false);
  };

  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-stroke
      px-[7.03vw]
      pt-[9.22vw]
      pb-[5.42vw]
      rounded-bl-[7.5vw] 
      rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[2.5vw]">
        Требования к вашему устройству
      </h2>
      <p className="font-extralight text-[2.08vw] font-ysabeau mt-[2.24vw] mb-[1.72vw]">
        Приложение работает только на устройствах с операционной системой
        Android
      </p>

      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col justify-start items-start">
          <ul
            className="list-disc font-light font-ysabeau text-black
            pl-[1.04vw] text-[1.82vw] w-[45.1vw]"
          >
            <li className="text-[1.82vw]">
              Операционная система Android версии 6.0 и выше
            </li>
            <li className="text-[1.82vw]">Оперативная память (ОЗУ): от 3 ГБ</li>
            <li className="text-[1.82vw]">
              Сетевые требования: Поддержка 4G, а также Wi-Fi для стабильной
              работы
            </li>
            <li className="text-[1.82vw]">Встроенная память: от 16 ГБ</li>
          </ul>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="text-stroke bg-primary text-[1.56vw] font-tenor rounded-[0.63vw]
            mt-[5.1vw]
            px-[1.82vw]
            py-[1.15vw]
            flex items-center gap-[0.52vw]
            disabled:opacity-70"
          >
            {isDownloading ? (
              <>
                <div className="w-[1.04vw] h-[1.04vw] border-2 border-stroke border-t-transparent rounded-full animate-spin"></div>
                Загрузка...
              </>
            ) : (
              'Скачать приложение "Family Assistant"'
            )}
          </button>
        </div>
        <div
          className="flex flex-col justify-center items-center ml-[5.42vw]
          w-[34.11vw]
          h-[18.18vw]
          rounded-[0.63vw]
          border-primary border-[1px]"
        >
          <p className="font-tenor text-primary text-[1.56vw] font-normal">
            Средняя оценка приложения:
          </p>
          <p className="font-tenor text-primary text-[3.33vw] mt-[2.55vw]">
            {rating}
          </p>
          <StarRating rating={rating} />
        </div>
      </div>

      <div className="w-full mt-[3vw]">
        <h3 className="font-tenor text-primary text-[2vw] mb-[1vw]">
          Статистика скачиваний
        </h3>
        <DownloadChart data={downloadStats} />
      </div>

      {showRatingModal && <Mark onClose={handleCloseRatingModal} />}
    </div>
  );
};

export default Requirements;
