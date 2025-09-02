import {motion} from "framer-motion";
import '../../styles/styles/pages/index/skills.css'
import Counter from "./components/Counter.jsx";
import {useState} from "react";
import SkillsItems from "./components/SkillsItems.jsx";

export default function Skills() {

    const [frontend, setFrontend] = useState([

        {
            name: 'HTML',
            color: '#E15026',
            image: '/icon/html-mini.svg',
            percent: 98,
        },
        {
            name: 'CSS',
            color: '#663693',
            image: '/icon/css-mini.svg',
            percent: 90,
        },
        {
            name: 'Java Script',
            color: '#EDCB00',
            image: '/icon/js-mini.svg',
            percent: 86,
        },
        {
            name: 'tailwind css',
            color: '#23BBBC',
            image: '/icon/tailwind-mini.svg',
            percent: 90,
        },
        {
            name: 'React Js',
            color: '#4CC7ED',
            image: '/icon/react-mini.svg',
            percent: 40,
        },
        {
            name: 'Astro Js',
            color: '#FF5D01',
            image: '/icon/astro-mini.svg',
            percent: 30,
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
            percent: 80,
            observed: false
        },
        {
            name: 'Laravel',
            color: '#EC1C24',
            image: '/icon/laravel-mini.svg',
            percent: 90,
            observed: false
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
                whileInView={{
                    opacity: 1,
                    filter: 'blur(0)',
                    translateY: 0,

                }}
                transition={{delay: .5, duration: 1.2, ease: [0.053, 0.809, 0.229, 1]}}
            >
                <h2 className='text-3-5xl font-bold mb-12'>
                    <span className='text-instagram-gradiant'>Frontend</span> Skills
                </h2>
            </motion.div>


            <div id='skills' className='grid gap-10 grid-cols-2 max-md:grid-cols-1 max-md:gap-4  w-full overflow-hidden '>
                {
                    frontend.map((item, index,array) => {
                        return (
                            <SkillsItems key={index} item={item} index={index} listItems={array} setList={setFrontend} />
                        )
                    })
                }


            </div>
            <motion.div
                className={`max-w-max`}
                initial={{opacity: 0, filter: 'blur(12px)', translateY: 20}}
                whileInView={{
                    opacity: 1,
                    filter: 'blur(0)',
                    translateY: 0,

                }}
                transition={{delay: .5, duration: 1.2, ease: [0.053, 0.809, 0.229, 1]}}
            >
                <h2 className='text-3-5xl font-bold mb-12 mt-12'>
                    <span className='text-instagram-gradiant'>Backend</span> Skills
                </h2>
            </motion.div>


            <div id='skills'
                 className='grid gap-10 grid-cols-2 max-md:grid-cols-1 max-md:gap-4  w-full overflow-hidden '>
                {
                    backend.map((item, index, array) => {
                        return (
                            <SkillsItems key={index} item={item} index={index} listItems={array} setList={setBackend}/>
                        )
                    })
                }


            </div>


        </div>

    );
}
