import React, { useState, useEffect } from "react";
import axios from "axios";
import Mark from "../../../components/modals/Mark";
import { $host } from "../../../http";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StarRating = ({ rating = 0 }) => {
  const stars = [0, 1, 2, 3, 4];
  
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

const DownloadChart = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];
  
  const chartData = safeData.map(item => ({
    date: item?.date ? new Date(item.date).toLocaleDateString('ru-RU') : 'Нет даты',
    downloads: Number(item?.kolvo || 0)
  }));

  if (!chartData.length) {
    return (
      <div className="w-full h-[20vw] mt-[2vw] flex items-center justify-center font-ysabeau text-[2vw]">
        Нет данных для отображения
      </div>
    );
  }

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
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ratingResponse = await $host.get("api/ratings/get-average-rating");
        const { average } = ratingResponse?.data || {};
        setRating(Number(average) || 0);

        const downloadResponse = await $host.get("api/dowloadCount/get-downloadcount");
        const downloadData = downloadResponse?.data;
        setDownloadStats(Array.isArray(downloadData) ? downloadData : []);
        setError(null);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setError("Ошибка при загрузке данных");
        setRating(0);
        setDownloadStats([]);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);

    setTimeout(async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        await $host.post("api/dowloadCount/incr-download", { date: today });

        const updatedData = await $host.get("api/dowloadCount/get-downloadcount");
        const newDownloadData = updatedData?.data;
        setDownloadStats(Array.isArray(newDownloadData) ? newDownloadData : []);
        setError(null);
      } catch (error) {
        console.error("Ошибка при обновлении скачиваний:", error);
        setError("Ошибка при обновлении данных");
      } finally {
        setIsDownloading(false);
        setShowRatingModal(true);
      }
    }, 5000);
  };

  const handleCloseRatingModal = () => {
    setShowRatingModal(false);
  };

  return (
    <div
      className="w-full flex flex-col items-start justify-start bg-stroke
      px-[8vw] md:px-[7.03vw]
      pt-[12vw] md:pt-[9.22vw]
      pb-[8vw] md:pb-[5.42vw]
      rounded-bl-[15vw] md:rounded-bl-[10vw] xl:rounded-bl-[7.5vw] 
      rounded-br-[15vw] md:rounded-br-[10vw] xl:rounded-br-[7.5vw]"
    >
      <h2 className="font-tenor text-primary text-[5vw] md:text-[3.5vw] xl:text-[2.5vw]">
        Требования к вашему устройству
      </h2>
      <p className="font-extralight text-[4vw] md:text-[3vw] xl:text-[2.08vw] font-ysabeau mt-[4vw] md:mt-[2.24vw] mb-[3vw] md:mb-[1.72vw]">
        Приложение работает только на устройствах с операционной системой
        Android
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full">
        <div className="flex flex-col justify-start items-start w-full md:w-auto">
          <ul
            className="list-disc font-light font-ysabeau text-black
            pl-[4vw] md:pl-[1.04vw] text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw] w-full md:w-[45.1vw]"
          >
            <li className="text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw] mb-[2vw] md:mb-0">
              Операционная система Android версии 6.0 и выше
            </li>
            <li className="text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw] mb-[2vw] md:mb-0">Оперативная память (ОЗУ): от 3 ГБ</li>
            <li className="text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw] mb-[2vw] md:mb-0">
              Сетевые требования: Поддержка 4G, а также Wi-Fi для стабильной
              работы
            </li>
            <li className="text-[3.5vw] md:text-[2.5vw] xl:text-[1.82vw]">Встроенная память: от 16 ГБ</li>
          </ul>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="text-stroke bg-primary text-[3vw] md:text-[2vw] xl:text-[1.56vw] font-tenor rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.63vw]
            mt-[8vw] md:mt-[5.1vw]
            px-[4vw] md:px-[1.82vw]
            py-[2vw] md:py-[1.15vw]
            w-full md:w-auto
            flex items-center justify-center md:justify-start gap-[1vw] md:gap-[0.52vw]
            disabled:opacity-70"
          >
            {isDownloading ? (
              <>
                <div className="w-[2vw] h-[2vw] md:w-[1.04vw] md:h-[1.04vw] border-2 border-stroke border-t-transparent rounded-full animate-spin"></div>
                Загрузка...
              </>
            ) : (
              'Скачать приложение "Family Assistant"'
            )}
          </button>
        </div>
        <div
          className="flex flex-col justify-center items-center mt-[8vw] md:mt-0 md:ml-[5.42vw]
          w-full md:w-[34.11vw]
          h-[40vw] md:h-[18.18vw]
          rounded-[1.5vw] md:rounded-[0.8vw] xl:rounded-[0.63vw]
          border-primary border-[1px]"
        >
          <p className="font-tenor text-primary text-[3vw] md:text-[2vw] xl:text-[1.56vw] font-normal">
            Средняя оценка приложения:
          </p>
          <p className="font-tenor text-primary text-[6vw] md:text-[4vw] xl:text-[3.33vw] mt-[4vw] md:mt-[2.55vw]">
            {rating.toFixed(1)}
          </p>
          <StarRating rating={rating} />
        </div>
      </div>

      <div className="w-full mt-[6vw] md:mt-[3vw]">
        <h3 className="font-tenor text-primary text-[4vw] md:text-[3vw] xl:text-[2vw] mb-[2vw] md:mb-[1vw]">
          Статистика скачиваний
        </h3>
        {error ? (
          <div className="h-[40vw] md:h-[20vw] flex items-center justify-center font-ysabeau text-[2vw] text-red-500">
            {error}
          </div>
        ) : (
          <div className="h-[40vw] md:h-[20vw]">
            <DownloadChart data={downloadStats} />
          </div>
        )}
      </div>

      {showRatingModal && <Mark onClose={handleCloseRatingModal} />}
    </div>
  );
};

export default Requirements;
