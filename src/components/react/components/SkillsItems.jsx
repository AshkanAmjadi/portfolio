import {motion} from "framer-motion";
import Counter from "./Counter.jsx";

export default function SkillsItems(props) {

    return (
        <motion.div
            initial={{opacity: 0, scale: 1.15, filter: 'blur(8px)' , '--os': '0%'}}
            whileInView={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0)',
                '--os': props.item.percent + '%'
            }}
            viewport={{amount : .5}}
            transition={{
                duration: 1.2, ease: [0.002, 0.567, 0, 1.003],
                '--os': {
                    delay: 1,
                    duration: 2,
                    ease: [0.623, 0.421, 0, 0.985]
                }

            }}
            onAnimationStart={() => {
            const newList = props.listItems.map(e => {
                if (props.item.name === e.name) {
                    e.observed = true;
                }
                return e;
            })

            props.setList(newList)
        }}

        >
            <div
                className={`skill skill-${props.index}  flex items-center gap-6 max-md:p-5 max-md:gap-2 mt-1 mb-1 ${props.item.observed && props.item.percent ? '' : 'opacity-45'}`}
                style={{'--color': props.item.color ?? '#5f7bba'}}>

                <div>
                    <img src={props.item.image} className='skill-img' loading='lazy' alt={props.item.image} />
                </div>
                <div>
                    <p className='font-extrabold text-lg'>
                        {props.item.name}
                    </p>


                </div>
                <div className={`flex-grow flex flex-row-reverse pr-4`}>

                    {
                        props.item.observed && props.item.percent
                            ? <motion.div
                                className='skill-percent text-sm font-bold flex'
                                style={{color: props.item.color}}
                                initial={{
                                    opacity: 0,
                                    scale: 1.2,
                                    filter: 'blur(8px)',
                                    translateX: 40
                                }}
                                animate={{opacity: 1, scale: 1, filter: 'blur(0px)', translateX: 0}}
                                transition={{duration: 1, ease: [0.002, 0.567, 0, 1.003]}}
                            >
                                <Counter from={0} to={props.item.percent} duration={1.5}
                                         ease={[0.002, 0.567, 0, 1.003]}/>
                                <span>%</span>
                            </motion.div>
                            : <p className='text-sm font-bold'>queued</p>
                    }


                </div>

            </div>

        </motion.div>
    )

}