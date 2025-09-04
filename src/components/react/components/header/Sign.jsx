import {motion} from "framer-motion";
const Sign = () => (
    <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 125.36 61.06"
        style={{
            width : '90px'
        }}

    >
        <motion.path

            initial={{pathLength: 0 }}
            animate={{pathLength: 1 }}
            transition={{
                duration : 4, ease: [0.741, 0, 0, 0.991],
            }}
            d="m37.66,19.13s-7.22-11.01-23.57,1.14C-3.48,33.33,1.36,46.25,1.36,46.25c0,0,7.15,27.93,45.11-2.61,0,0,12.44-9.53,28.55-42.89l-13.87,59.56s11.83-50.31-49.06-18.95l78.51-20.61s1.74,2.44,1.08,4.63,6.15-3.28,6.15-3.28c0,0,1.34-1.63,4.44,2.65,3.1,4.28,4.76-4.57,9.8-3.88s12.53-1.06,12.53-1.06"
            style={{
                fill: "none",
                stroke: "#BCC2C7",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
                width : '30px'
            }}
        />
    </svg>
);
export default Sign;
