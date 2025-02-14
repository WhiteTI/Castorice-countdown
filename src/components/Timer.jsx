'use client'

import {useCountdown} from "@/hook/useCountdown";
import {useEffect, useState} from "react";

const Timer = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, []);


    const obj = useCountdown([2025, 3, 9, 3])

    function getZero(num) {
        if (num >= 0 && num < 10)
            return `0${num}`;

        return num;
    }

    if (!isClient)
        return (
            <div className='animate-pulse flex gap-x-2 items-end'>
                <div>00</div>
                <span className='text-xl uppercase'>days</span>
                <div>00</div>
                :
                <div>00</div>
                :
                <div>00</div>
            </div>
        )

    return (
        <div className='flex justify-center gap-x-2 items-end w-80 lg:w-[28rem]'>
            {obj.timeOver
                ? 'The time is now!'
                : <>
                    <div>{getZero(obj.days)}</div>
                    <span className='text-xl uppercase'>days</span>
                    <div>{getZero(obj.hours)}</div>
                    :
                    <div>{getZero(obj.minutes)}</div>
                    :
                    <div >{getZero(obj.seconds)}</div>
                </>

            }
        </div>
    );
};

export default Timer;