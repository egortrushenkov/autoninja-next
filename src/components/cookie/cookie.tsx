'use client'

import { useEffect, useState } from "react";

export default function Cookie() {
    const [isLoading, setIsLoading] = useState(true);
    const [activeCookie, setActiveCookie] = useState(true);
    
    useEffect(() => {
        // Проверяем localStorage только на клиенте
        const checkCookieConsent = () => {
            const cookieConsent = localStorage.getItem('cookieConsent');
            if (cookieConsent === 'accepted') {
                setActiveCookie(false);
            }
            setIsLoading(false);
        };

        // Небольшая задержка для предотвращения мигания
        const timer = setTimeout(checkCookieConsent, 100);
        return () => clearTimeout(timer);
    }, []);

    const action_cookie = () => {
        setActiveCookie(false);
        localStorage.setItem('cookieConsent', 'accepted');
    }

    // Не показываем ничего во время загрузки
    if (isLoading) {
        return null;
    }

    return (
        <>
        {activeCookie ? ( 
            <div className="cookie" id="cookie">
                <div className="text-cookie">
                    Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies
                </div>
                <button onClick={action_cookie}>
                    Окей
                </button>
            </div>
        ) : null}
        </> 
    )
}