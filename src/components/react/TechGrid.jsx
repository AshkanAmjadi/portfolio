import {motion} from "framer-motion";
import '../../styles/styles/pages/index/teckgrid.css'
import TeckStack from "./components/teck-grid/TeckStack.jsx";
import CaseStudy from "./components/teck-grid/CaseStudy.jsx";
import {useEffect, useState} from "react";
import Github from "./components/teck-grid/Github.jsx";
import SocialMedia from "./components/teck-grid/SocialMedia.jsx";

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

    const amoutOfView = 0.3


    return (
        <div className='w-full place-items-center overflow-hidden'>
            <motion.div layout  id='teckGrid'>
                <motion.div
                    className="tech-grid-item social-media overflow-hidden relative"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: -50
                    }}
                    whileInView={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 0, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                    viewport={{amount : amoutOfView}}
                    onViewportEnter={()=>{setInview('socialMedia')}}
                    onViewportLeave={()=>{setInview('socialMedia',false)}}

                >

                    {
                        tecks.map((e,index)=> e.name === 'socialMedia' && e.inview ?
                            <div key={index}>
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                        filter: 'blur(8px)',
                                        translateY: 50
                                    }}
                                    animate={{opacity: 1, filter: 'blur(0px)', translateY: 0}}
                                    transition={{delay: 0, duration: 2, ease: [0.623, 0.421, 0, 0.985]}}
                                    className='absolute' style={{minWidth: '200%', top: '65%', left: '-50%'}}
                                    src='./social-media-sub.svg' loading='lazy'/>
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                        filter: 'blur(8px)',
                                        translateX: -50
                                    }}
                                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                                    transition={{delay: 1.7, duration: .7, ease: [0.623, 0.421, 0, 0.985]}}
                                    className='absolute' style={{maxWidth: '60%', top: '-3%', left: '-3%'}}
                                    src='./social-media-sub-2.svg' loading='lazy'/>
                                <SocialMedia/>
                            </div>
                            : '')
                    }

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
                    viewport={{amount : amoutOfView}}
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
                    onViewportEnter={()=>{setInview('github')}}
                    onViewportLeave={()=>{setInview('github',false)}}
                    viewport={{amount : amoutOfView}}

                >

                    {
                        tecks.map((e,index)=> e.name === 'github' && e.inview ? <Github key={index} /> : '')
                    }

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
                    onViewportEnter={()=>{setInview('caseStudy')}}
                    onViewportLeave={()=>{setInview('caseStudy',false)}}
                    viewport={{amount : amoutOfView}}
                >
                    {
                        tecks.map((e,index)=> e.name === 'caseStudy' && e.inview ? <CaseStudy key={index} /> : '')
                    }
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
                    onViewportLeave={()=>{setInview('teckStack',false)}}
                    viewport={{amount : amoutOfView}}

                >
                    {
                        tecks.map((e,index)=> e.name === 'teckStack' && e.inview ? <TeckStack key={index} /> : '')
                    }

                </motion.div>
            </motion.div>
        </div>
    )

    
    function setInview(grid , state = true) {
        const newTecks = tecks.map((e)=>{
            if (e.name === grid){
                e.inview = state
            }
            return e
        })
        setTecks(newTecks)
    }


}