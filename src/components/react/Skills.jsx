import {motion } from "framer-motion";
import '../../styles/styles/pages/skills.css'
import Counter from "./components/Counter.jsx";
import {useState} from "react";

export default function Skills() {

    const [frontend, setFrontend] = useState([

        {
            name: 'HTML',
            color: '#E15026',
            image: '/icon/html-mini.svg',
            percent : 98,
            observed : false
        },
        {
            name: 'CSS',
            color: '#663693',
            image: '/icon/css-mini.svg',
            percent : 90,
            observed : false
        },
        {
            name: 'Java Script',
            color:  '#EDCB00',
            image: '/icon/js-mini.svg',
            percent: 86,
            observed : false
        },
        {
            name: 'tailwind css',
            color:  '#23BBBC',
            image: '/icon/tailwind-mini.svg',
            percent: 90,
            observed : false
        },
        {
            name: 'React Js',
            color:  '#4CC7ED',
            image: '/icon/react-mini.svg',
            percent: 40,
            observed : false
        },
        {
            name: 'Astro Js',
            color: '#FF5D01',
            image: '/icon/astro-mini.svg',
            percent: 30,
            observed : false
        },
        {
            name: 'Vue Js',
            image: '/icon/vue-mini.svg',
        },
        {
            name: 'Next Js',
            image: '/icon/next-mini.svg'
        }

    ])

    const [backend, setBackend] = useState([
        {
            name: 'PHP',
            color: '#502C86',
            image: '/icon/php-mini.svg',
            percent : 80,
            observed : false
        },
        {
            name: 'Laravel',
            color: '#EC1C24',
            image: '/icon/laravel-mini.svg',
            percent : 90,
            observed : false
        },
        {
            name: 'Express Js',
            image: '/icon/express-mini.svg',
        },
        {
            name: 'Node Js',
            image: '/icon/node-mini.svg'
        }
    ])

    return (

        <div id='skill-section ' className={`mt-20 w-full flex flex-col items-center`}>

            <motion.div
                className={`max-w-max`}
                initial={{opacity: 0, filter: 'blur(12px)', translateY: 20}}
                animate={{
                    opacity: 1,
                    filter: 'blur(0)',
                    translateY: 0,

                }}
                transition={{delay: .7, duration: 2, ease: [0.053, 0.809, 0.229, 1]}}
            >
                <h2 className='text-3-5xl font-bold mb-12'>
                    <span className='text-instagram-gradiant'>Frontend</span> Skills
                </h2>
            </motion.div>


            <div id='skills' className='grid grid-cols-3 gap-xl  w-full overflow-hidden '>

                {
                    frontend.map((item, index) => {
                        return (
                            <motion.div
                                className='max-md:!col-span-1 last:col-span-2 '
                                key={index}
                                initial={{opacity: 0, scale: 1.2, filter: 'blur(8px)', translateY: 40, '--os': '0%'}}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    filter: 'blur(0)',
                                    translateY: 0,
                                    '--os': item.percent + '%'
                                }}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1.2, ease: [0.002, 0.567, 0, 1.003],
                                    '--os': {
                                        delay: 1,
                                        duration: 1.5,
                                        ease: [0.002, 0.567, 0, 1.003]
                                    }

                                }}
                                onAnimationStart={() => {
                                    const newFrontend = frontend.map(e => {
                                        if (item.name === e.name) {
                                            e.observed = true;
                                        }
                                        return e;
                                    })

                                    setFrontend(newFrontend)
                                }}
                            >
                                <div
                                    className={`skill skill-${index}  flex items-center gap-6 max-md:p-5 mt-1 mb-1 ${item.observed && item.percent ? '' : 'opacity-45'}`}
                                    style={{'--color': item.color}}>

                                    <div>
                                        <img src={item.image} className='skill-img'/>
                                    </div>
                                    <div>
                                        <p className='font-extrabold text-lg'>
                                            {item.name}
                                        </p>

                                        {
                                            item.observed && item.percent
                                                ? <Counter from={0} to={item.percent} duration={1.5}
                                                           ease={[0.002, 0.567, 0, 1.003]}/>
                                                : 'queued'
                                        }
                                    </div>

                                </div>

                            </motion.div>
                        )
                    })
                }


            </div>


            



        </div>

    );
}
