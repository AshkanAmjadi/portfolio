import {AnimatePresence, motion} from "framer-motion";
import prfile from '../../assets/me/profile.jpg'
import {useEffect, useState} from "react";

export default function HeroSection() {

    const [scope, setScope] = useState('')

    const scoops = [
        'developre 👨‍💻',
        'designer 🌟',
        '🎯 product builder',
        '🔥 JavaScript ninja',
        'create by Laravel ⚡',
    ]

    useEffect(() => {
        startTextAnimation()
    }, [])

    return (
        <div id='heroSection' className='flex flex-col items-center justify-center w-full  overflow-hidden'>
            <motion.div
                key='heroImage'
                initial={{opacity: 0, filter: 'blur(20px)', scale: 1.5}}
                animate={{
                    opacity: 1,
                    filter: 'blur(0)',
                    scale: 1,

                    transition: {delay: 1.5, duration: 1.8, ease: [0.074, 0.794, 0.229, 1]}
                }}
                exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
                style={{padding: "2rem"}}
            >

                <img id='heroImage' src={prfile.src} width={prfile.width} height={prfile.height} alt=""/>

            </motion.div>


            <motion.div
                key='title'
                className='text-3xl text-center font-extrabold'
                initial={{opacity: 0, filter: 'blur(12px)', translateY: 10}}
                animate={{
                    opacity: 1,
                    filter: 'blur(0)',
                    translateY: 0,
                    transition: {delay: 1.1, duration: .5}
                }}
                exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
            >

                ashkan amjadi 👋

            </motion.div>
            <motion.div
                key='subtitle'
                className='text-lg text-center font-light mt-5'
                initial={{opacity: 0, filter: 'blur(12px)', translateY: 10}}
                animate={{
                    opacity: 1,
                    filter: 'blur(0)',
                    translateY: 0,
                    transition: {delay: 1.3, duration: .5}
                }}
                exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
            >

                fullstck - web -

                <span id={`scoopElement`} className='inline-block'>
                        <AnimatePresence mode='wait'>
                        <motion.span
                            key={scope}
                            className='inline-block mx-1 text-rose-500 font-bold'
                            initial={{opacity: 0, filter: 'blur(12px)', translateX: -20, width: 0}}
                            animate={{
                                opacity: 1,
                                filter: 'blur(0)',
                                translateX: 0,
                                width: 'auto',
                                transition: {duration: .5}
                            }}
                            exit={{
                                width: 0,
                                opacity: 0,
                                filter: 'blur(20px)',
                                translateX: 20,
                                transition: {delay: 0, duration: 0.2}
                            }}
                        >
                            <p className='min-w-max'>{scope}</p>
                        </motion.span>
                    </AnimatePresence>
                    </span>


            </motion.div>

        </div>


    );


    function startTextAnimation() {
        let scoop;

        scoops.forEach((e, index, array) => {
            if (index === 0) {
                setScope(e)
                scoop = index;
            }
        })

        setTimeout(() => {


            setInterval(() => {
                scoop++
                scoops.forEach((e, index, array) => {
                    if (index === scoop) {
                        setScope(e)
                        if (array.length - 1 === scoop) {
                            scoop = -1
                        }
                    }
                })


            }, 3500)

        }, 1000)
    }


}
