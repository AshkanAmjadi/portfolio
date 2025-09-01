import {motion} from "framer-motion";
import '../../styles/styles/pages/index/teckgrid.css'
import TeckStack from "./components/teck-grid/TeckStack.jsx";

export default function TechGrid() {


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
                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: .1, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >


                </motion.div>
                <motion.div
                    className="tech-grid-item side-left"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: -50
                    }}
                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: .4, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >

                </motion.div>
                <motion.div
                    className="tech-grid-item github"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: .8, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >

                </motion.div>
                <motion.div
                    className="tech-grid-item case-study"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: .9, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >

                </motion.div>
                <motion.div
                    className="tech-grid-item teck-stack relative"
                    initial={{
                        opacity: 0,
                        filter: 'blur(8px)',
                        translateX: 50
                    }}
                    animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                    transition={{delay: 1, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                >
                    <TeckStack />
                </motion.div>
            </div>
        </div>
    )


}