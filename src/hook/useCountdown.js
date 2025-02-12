import {useEffect, useState} from "react";

export const useCountdown = (targetDate) => {
    const target = new Date(Date.UTC(...targetDate))
    const [diff, setDiff] = useState(target.getTime() - new Date().getTime());

    if (diff <= 0)
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            timeOver: true
        }

    useEffect(() => {
        const id = setInterval(() => {
            setDiff(target.getTime() - new Date().getTime());
        }, 1000)

        if (diff <= 0)
            clearInterval(id)

        return () => clearInterval(id)
    }, [target]);

    return getTimeRemaining(diff)
}

function getTimeRemaining(diff) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
        days,
        hours,
        minutes,
        seconds,
        timeOver: false
    }
}