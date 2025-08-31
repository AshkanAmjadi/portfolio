import {AnimatePresence, motion} from "framer-motion";
import prfile from  '../../assets/me/profile.jpg'

export default function HeroSection() {


    return (
        <div>
            <motion.div
                initial={{opacity: 0, filter: 'blur(20px)', scale : 1.5, display: 'none'}}
                animate={{opacity: 1, filter: 'blur(0)' , scale : 1, display: 'block', transition: {delay: 0.1, duration:1 ,ease: [0.074, 0.794, 0.229, 1] }}}
                exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
                style={{padding: "2rem"}}
            >

                <img id='heroImage' src={prfile.src} width={prfile.width} height={prfile.height} alt=""/>

            </motion.div>

            <AnimatePresence>
                <motion.div
                    className='text-3xl text-center font-extrabold'
                    initial={{opacity: 0, filter: 'blur(12px)',translateY : 10, display: 'none'}}
                    animate={{opacity: 1, filter: 'blur(0)' , translateY : 0 , display: 'block', transition: {delay: 1.1, duration: .5}}}
                    exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
                >

                    ashkan amjadi 👋

                </motion.div>
                <motion.div
                    className='text-lg text-center font-light'
                    initial={{opacity: 0, filter: 'blur(12px)',translateY : 10, display: 'none'}}
                    animate={{opacity: 1, filter: 'blur(0)' , translateY : 0 , display: 'block', transition: {delay: 1.3, duration: .5}}}
                    exit={{opacity: 0, filter: 'blur(20px)', transition: {delay: 0, duration: 0.05}}}
                >

                    fullstck - web - developer 👨‍💻

                </motion.div>
            </AnimatePresence>
        </div>


    );
}
