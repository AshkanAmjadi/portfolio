
import {animate} from "framer-motion";
import {useRef, useEffect, useState} from "react";

export default function Counter({from = 0, to = 100, duration = 2,delay = 1 , ease = "easeOut"}) {
    const ref = useRef();
    const [played, setPlayed] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (played){
            return;
        }

        const controls = animate(from, to, {
            duration,
            ease,
            delay : delay ,
            onPlay(){
                setPlayed(true)
            },
            onUpdate(value) {
                element.textContent = Math.round(value);
            },
            onComplete() {
                // console.log("✅ شمارنده به پایان رسید!");
            }
        });
    }, [from, to, duration, ease, played]);

    return (
        <p
            ref={ref}
        />
    );
}
