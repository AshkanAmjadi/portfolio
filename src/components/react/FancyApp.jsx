import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export default function FancyApp() {
    const [count, setCount] = useState(0);

    return (

        <AnimatePresence>
            <motion.div
                key={count}
                initial={{opacity: 0, filter: 'blur(5px)' , display : 'none' }}
                animate={{opacity: 1, filter: 'blur(0)' ,display : 'block' , transition: { delay:0.1, duration: 0.1 }}}
                exit={{opacity: 0, filter: 'blur(20px)'  , transition: { delay: 0, duration: 0.05 }}}
                style={{padding: "2rem"}}
            >
                <button className='bg-black text-white p-2' onClick={() => {
                    setCount(count + 1)
                }}>click
                </button>

                {count}

            </motion.div>
        </AnimatePresence>
    );
}
