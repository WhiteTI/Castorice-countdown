'use client'

import {useEffect, useState} from "react";
import {useCountdown} from "@/hook/useCountdown";

const Timer = () => {
    const obj = useCountdown([2025, 3, 9, 3])

    function getZero(num) {
        if (num >= 0 && num < 10)
            return `0${num}`;

        return num;
    }

    function formatTimer(timeObject) {
        const {days, hours, minutes, seconds} = timeObject
        return `${getZero(days)}:${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`;
    }

    const [time, setTime] = useState('00:00:00:00');

    useEffect(() => {
        setTime(formatTimer(obj))
    }, [obj]);

    return (
        <div>
            {obj.timeOver ? 'The time is now!' : time}
        </div>
    );
};

export default Timer;