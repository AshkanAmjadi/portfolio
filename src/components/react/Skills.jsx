import {motion} from "framer-motion";


export default function Skills() {

    const array = [...Array(3).keys()]

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
                transition={{delay: .7, duration: 2 , ease: [0.053, 0.809, 0.229, 1]}}
            >
                <h2 className='text-3-5xl font-bold mb-32'>
                    skills
                </h2>
            </motion.div>



            <div id='skills' className='grid grid-cols-2 gap-xl  w-full'>

                {
                    array.map(()=> {
                        return (<motion.div

                            initial={{opacity: 0, filter: 'blur(12px)', translateX: 20}}
                            whileInView={{opacity: 1, filter: 'blur(0)', translateX: 0}}
                            transition={{duration: 1.2, ease: [0.002, 0.567, 0, 1.003]}}
                        >
                            <div className='skill card'>

                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cupiditate
                                delectus dolorem, doloribus hic id maxime minima mollitia, nam neque odit officia
                                pariatur quae quasi quisquam quod rem repellat rerum sequi similique sint temporibus
                                tenetur vel vero voluptate voluptates. Animi dolor dolorem, eligendi eum id itaque
                                perferendis voluptas voluptatum. A beatae delectus dolor eligendi, eos, fuga impedit
                                iste labore laborum, modi nemo reiciendis rerum ut veniam voluptatem! Ab animi at, cum
                                eligendi saepe voluptatum? Accusamus accusantium adipisci commodi, deleniti dicta
                                dolorem doloribus, explicabo harum hic impedit laborum libero magni minima nesciunt non
                                odio perferendis recusandae reiciendis sapiente similique, voluptatem.

                            </div>

                        </motion.div>)
                    })
                }


            </div>


        </div>

    );
}
