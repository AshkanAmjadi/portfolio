import { motion } from "framer-motion";

const HeroRight = () => {

    return (

        <motion.div
            className="hero-right"
            initial={{
                opacity : 0,
                filter : 'blur(20px)',
                translateX : 200
            }}
            animate={{
                opacity : 1,
                filter : 'blur(0px)',
                translateX : 0
            }}


            transition={{
                delay: .2, duration: 1, ease: [0.623, 0.421, 0, 0.985]
            }}
        >
            <img className='absolute w-full h-full' src='./hero/hero-right.svg'/>
            <div className="hero-box hero-r-t"></div>
            <div className="hero-box hero-r-m have place-items-center place-content-center">
                <img className='w-1/3' src='./hero/self-study.svg'/>
                <p className='text-sm'>self study</p>
            </div>
            <div className="hero-box hero-r-b"></div>
        </motion.div>
    )

}

export default HeroRight;