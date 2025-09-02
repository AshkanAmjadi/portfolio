import {motion} from "framer-motion";
import '../../styles/styles/pages/index/teckgrid.css'
import TeckStack from "./components/teck-grid/TeckStack.jsx";
import CaseStudy from "./components/teck-grid/CaseStudy.jsx";
import {useEffect, useState} from "react";

export default function TechGrid() {

    const [tecks, setTecks] = useState([
        {
            name : 'socialMedia',
            inview : false
        },
        {
            name : 'sideLeft',
            inview : false
        },
        {
            name : 'github',
            inview : false
        },
        {
            name : 'caseStudy',
            inview : false
        },
        {
            name : 'teckStack',
            inview : false
        },
    ])

    useEffect(()=>{


        console.log('ok')

    },[])


    return (
        <div className='w-full place-items-center overflow-hidden'>
            <div id='teckGrid'>
                <motion.div
                    className="tech-grid-item social-media"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: -50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >


                </motion.div>
                <motion.div
                    className="tech-grid-item side-left"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: -50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >

                </motion.div>
                <motion.div
                    className="tech-grid-item github"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >

                </motion.div>
                <motion.div
                    className="tech-grid-item case-study overflow-hidden relative"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >
                    <CaseStudy />
                </motion.div>
                <motion.div
                    className="tech-grid-item teck-stack relative"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                    onViewportEnter={()=>{setInview('teckStack')}}
                >
                    {
                        tecks.map((e,index)=> e.name === 'teckStack' && e.inview ? <TeckStack key={index} /> : '')
                    }

                </motion.div>
            </div>
        </div>
    )

    
    function setInview(grid) {
        const newTecks = tecks.map((e)=>{
            if (e.name === grid){
                e.inview = true
            }
            return e
        })
        setTecks(newTecks)
    }


}