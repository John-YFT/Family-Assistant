import React, { useEffect, useState } from "react";
import { $host } from "../../http";

const Admin = () => {
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);

    const fetchFeedbacks = async () => {
        try {
            const { data } = await $host.get('/api/feedback/get-aboutus');
            setFeedbacks(data);
        } catch (e) {
            console.error('Ошибка при получении обратной связи:', e);
        }
    };

    useEffect(() => {
        if (showFeedback) {
            fetchFeedbacks();
        }
    }, [showFeedback]);

    return (
        <div className="w-[95vw] md:w-[90vw] xl:w-[80vw] mx-auto my-[8vw] md:my-[6vw] xl:my-[4vw]">
            {!showFeedback ? (
                <div className="flex justify-center">
                    <button 
                        onClick={() => setShowFeedback(true)}
                        className="bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-300
                        px-[6vw] md:px-[4vw] xl:px-[2vw] 
                        py-[3vw] md:py-[2vw] xl:py-[1vw]
                        text-[4vw] md:text-[2vw] xl:text-[1.2vw]
                        rounded-[2vw] md:rounded-[1vw] xl:rounded-[0.5vw]
                        text-white"
                    >
                        Обратная связь
                    </button>
                </div>
            ) : (
                <div className="bg-white/90 
                    rounded-[3vw] md:rounded-[2vw] xl:rounded-[1vw]
                    p-[6vw] md:p-[4vw] xl:p-[2vw]
                    shadow-[0_0.2vw_1vw_rgba(0,0,0,0.1)]"
                >
                    <h1 className="text-center mb-[4vw] md:mb-[3vw] xl:mb-[2vw]
                        text-[6vw] md:text-[4vw] xl:text-[2.5vw]
                        text-[#4B0082]"
                    >
                        Обратная связь с пользователями
                    </h1>
                    <h3 className="text-center mb-[4vw] md:mb-[3vw] xl:mb-[2vw]
                        text-[4vw] md:text-[2.5vw] xl:text-[1.5vw]
                        text-[#800080]"
                    >
                        Обязательно исправить и изучить каждый вопрос!
                    </h3>
                    
                    <div className="flex flex-col gap-[4vw] md:gap-[3vw] xl:gap-[2vw]">
                        {feedbacks.map((feedback) => (
                            <div 
                                key={feedback.id} 
                                className="bg-white/95 
                                    rounded-[2vw] md:rounded-[1.5vw] xl:rounded-[0.8vw]
                                    p-[4vw] md:p-[2.5vw] xl:p-[1.5vw]
                                    shadow-[0_0.2vw_0.5vw_rgba(75,0,130,0.1)]
                                    transition-all duration-300
                                    border border-[#E6E6FA]"
                            >
                                <h4 className="text-[4.5vw] md:text-[3vw] xl:text-[1.8vw]
                                    mb-[3vw] md:mb-[2vw] xl:mb-[1vw]
                                    text-[#4B0082]"
                                >
                                    {feedback.user.fullName}
                                </h4>
                                <div className="text-[3.5vw] md:text-[2vw] xl:text-[1.2vw]">
                                    <p className="text-[#800080]">Тип проблемы: {feedback.role}</p>
                                    <p className="text-[#800080]">Описание: {feedback.text}</p>
                                    <div className="mt-[3vw] md:mt-[2vw] xl:mt-[1vw]">
                                        <p>
                                            Email: 
                                            <a 
                                                href={`mailto:${feedback.user.email}`}
                                                className="ml-[2vw] md:ml-[1vw] xl:ml-[0.5vw]
                                                text-[#DAA520] no-underline hover:underline"
                                            >
                                                {feedback.user.email}
                                            </a>
                                        </p>
                                        <p>
                                            Телефон: 
                                            <a 
                                                href={`tel:${feedback.user.phone}`}
                                                className="ml-[2vw] md:ml-[1vw] xl:ml-[0.5vw]
                                                text-[#DAA520] no-underline hover:underline"
                                            >
                                                {feedback.user.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-[6vw] md:mt-[4vw] xl:mt-[3vw] text-center">
                        <button 
                            onClick={() => setShowFeedback(false)}
                            className="bg-[#DAA520] hover:bg-[#B8860B] transition-all duration-300
                            px-[6vw] md:px-[4vw] xl:px-[2vw] 
                            py-[3vw] md:py-[1.5vw] xl:py-[0.8vw]
                            text-[4vw] md:text-[2vw] xl:text-[1.2vw]
                            rounded-[2vw] md:rounded-[1vw] xl:rounded-[0.5vw]
                            text-white"
                        >
                            Назад
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin; 