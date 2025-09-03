import { motion } from "framer-motion";

const HeroLeft = () => {

    return (
        <motion.div
            className="hero-left"
            initial={{
                opacity : 0,
                filter : 'blur(20px)',
                translateX : -200
            }}
            animate={{
                opacity : 1,
                filter : 'blur(0px)',
                translateX : 0
            }}


            transition={{
                delay: .6, duration: 2, ease: [0.623, 0.421, 0, 0.985]
            }}
        >
            <img className='absolute w-full' src='./hero/hero-left.svg' />
            <div className="hero-l-l-t hero-box"></div>
            <div className="hero-l-l-b hero-box"></div>
            <div className="hero-l-r-t hero-box"></div>
            <div className="hero-l-r-b hero-box have place-items-center place-content-center">
                <p className='font-bold text-4xl pb-1'>
                    +7
                </p>
                <p className='font-light text-md' style={{marginTop : '10%'}}>
                    years
                </p>

            </div>
        </motion.div>
    )

}

export default HeroLeft;