import {motion} from "framer-motion";

const Github = () => {


    const gitHubLetterInit = {opacity: 0, filter: 'blur(10px)'}
    const gitHubLetteranimate = {opacity: 1, filter: 'blur(0px)'}
    const gitHubLetterDuration = .3
    const gitHubLetterDelay = 1.2
    const gitHubLetter = {
        b: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.6
            }
        },
        u: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.5
            }
        },
        h: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.4
            }
        },
        t: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.3
            }
        },
        i: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.2
            }
        },
        g: {
            transition: {
                duration: gitHubLetterDuration,
                delay: gitHubLetterDelay + 0.1
            }
        }
    }


    return (


        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 100"

        >
            <defs>
                <filter id="drop-shadow-5" filterUnits="userSpaceOnUse">
                    <feOffset dx={7} dy={7}/>
                    <feGaussianBlur result="blur" stdDeviation={5}/>
                    <feFlood floodColor="#000" floodOpacity={0.75}/>
                    <feComposite in2="blur" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient
                    id="linear-gradient-green"
                    x1={144.98}
                    y1={81.37}
                    x2={144.98}
                    y2={61.28}
                    gradientTransform="translate(46.97) skewX(-20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#007c42"/>
                    <stop offset={0.15} stopColor="#00773c"/>
                    <stop offset={0.2} stopColor="#007539"/>
                    <stop offset={0.32} stopColor="#017038" stopOpacity={0.94}/>
                    <stop offset={0.49} stopColor="#056336" stopOpacity={0.79}/>
                    <stop offset={0.69} stopColor="#0d4d32" stopOpacity={0.53}/>
                    <stop offset={0.91} stopColor="#17302d" stopOpacity={0.17}/>
                    <stop offset={1} stopColor="#1c222b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1={158.02}
                    y1={60.13}
                    x2={178.25}
                    y2={60.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#00a752"/>
                    <stop offset={0.1} stopColor="#05a855"/>
                    <stop offset={0.23} stopColor="#16ac5e"/>
                    <stop offset={0.38} stopColor="#32b36e"/>
                    <stop offset={0.49} stopColor="#4cba7d"/>
                    <stop offset={0.55} stopColor="#41ae72" stopOpacity={0.98}/>
                    <stop offset={0.85} stopColor="#127d46" stopOpacity={0.91}/>
                    <stop offset={1} stopColor="#006b35" stopOpacity={0.89}/>
                </linearGradient>
                <filter id="drop-shadow-6" filterUnits="userSpaceOnUse">
                    <feOffset dx={0} dy={0}/>
                    <feGaussianBlur result="blur-2" stdDeviation={0.47}/>
                    <feFlood floodColor="#71be4d" floodOpacity={1}/>
                    <feComposite in2="blur-2" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="drop-shadow-7" filterUnits="userSpaceOnUse">
                    <feOffset dx={7} dy={7}/>
                    <feGaussianBlur result="blur-3" stdDeviation={5}/>
                    <feFlood floodColor="#000" floodOpacity={0.75}/>
                    <feComposite in2="blur-3" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient
                    id="linear-gradient-3"
                    x1={21.77}
                    y1={85.42}
                    x2={21.77}
                    y2={65.32}
                    gradientTransform="translate(46.97) skewX(-20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ff5309"/>
                    <stop offset={0.16} stopColor="#ff4d0e"/>
                    <stop offset={0.2} stopColor="#ff4b10"/>
                    <stop offset={0.27} stopColor="#f94910" stopOpacity={0.97}/>
                    <stop offset={0.37} stopColor="#e84612" stopOpacity={0.9}/>
                    <stop offset={0.49} stopColor="#cd4215" stopOpacity={0.78}/>
                    <stop offset={0.62} stopColor="#a83b1a" stopOpacity={0.62}/>
                    <stop offset={0.77} stopColor="#773220" stopOpacity={0.4}/>
                    <stop offset={0.92} stopColor="#3d2826" stopOpacity={0.15}/>
                    <stop offset={1} stopColor="#1c222b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-4"
                    x1={61.41}
                    y1={85.42}
                    x2={61.41}
                    y2={65.32}
                    gradientTransform="translate(46.97) skewX(-20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#2db5bf"/>
                    <stop offset={0.2} stopColor="#2bb6bf"/>
                    <stop offset={0.29} stopColor="#2ab0b9" stopOpacity={0.97}/>
                    <stop offset={0.41} stopColor="#29a2ab" stopOpacity={0.87}/>
                    <stop offset={0.55} stopColor="#268b94" stopOpacity={0.71}/>
                    <stop offset={0.71} stopColor="#236a73" stopOpacity={0.49}/>
                    <stop offset={0.88} stopColor="#1f414a" stopOpacity={0.21}/>
                    <stop offset={1} stopColor="#1c222b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-5"
                    x1={-1.77}
                    y1={1413.09}
                    x2={-4.59}
                    y2={1407.19}
                    gradientTransform="translate(-466.43 1479.1) scale(1 -1) skewX(20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ff1639"/>
                    <stop offset={1} stopColor="#ff1639" stopOpacity={0}/>
                </linearGradient>
                <filter id="drop-shadow-8" filterUnits="userSpaceOnUse">
                    <feOffset dx={7} dy={7}/>
                    <feGaussianBlur result="blur-4" stdDeviation={5}/>
                    <feFlood floodColor="#000" floodOpacity={0.75}/>
                    <feComposite in2="blur-4" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient
                    id="linear-gradient-6"
                    x1={74.95}
                    y1={53.91}
                    x2={74.95}
                    y2={33.81}
                    gradientTransform="translate(46.97) skewX(-20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#ec1c24"/>
                    <stop offset={0.2} stopColor="#ec1c24"/>
                    <stop offset={0.27} stopColor="#e61c24" stopOpacity={0.97}/>
                    <stop offset={0.38} stopColor="#d51c24" stopOpacity={0.89}/>
                    <stop offset={0.51} stopColor="#bb1d25" stopOpacity={0.77}/>
                    <stop offset={0.65} stopColor="#951e26" stopOpacity={0.59}/>
                    <stop offset={0.8} stopColor="#661f28" stopOpacity={0.36}/>
                    <stop offset={0.96} stopColor="#2c212a" stopOpacity={0.08}/>
                    <stop offset={1} stopColor="#1c222b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-7"
                    x1={85.57}
                    y1={1450.84}
                    x2={93.61}
                    y2={1439.21}
                    gradientTransform="translate(-466.43 1479.1) scale(1 -1) skewX(20)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#32b1c1"/>
                    <stop offset={1} stopColor="#14c6b7"/>
                </linearGradient>
                <linearGradient
                    id="linear-gradient-8"
                    x1={114.54}
                    y1={53.91}
                    x2={114.54}
                    y2={33.81}
                    xlinkHref="#linear-gradient-4"
                />
            </defs>
            <g>

                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.b.transition}
                    d="m71.51,15.6l.02.03c-1.8,0-3.03.79-3.03.79v-5.61c-.01-.13-.12-.25-.26-.25h-3.19c-.14,0-.26.12-.26.25l-.03,16.52c0,.13.14.25.29.25h2.22c.09,0,.16-.03.21-.12.07-.09.13-.77.13-.77,0,0,1.32,1.23,3.78,1.23,2.91,0,4.58-1.45,4.58-6.55s-2.66-5.77-4.46-5.77Zm-1.23,9.35c-1.09-.03-1.83-.54-1.83-.54v-5.23s.72-.44,1.62-.5c1.16-.12,2.25.23,2.25,2.92,0,2.84-.49,3.39-2.04,3.35Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.u.transition}
                    d="m63.17,16.25l-.03,11.11v.02c-.01.13-.12.24-.25.23h-2.02c-.1,0-.21-.06-.24-.13-.04-.09-.12-.67-.12-.67,0,0-1.69,1.14-3.78,1.14-2.53,0-4.38-.82-4.38-4.09v-7.59c.01-.14.12-.25.26-.25h3.21c.14,0,.25.11.25.25v7.06c0,1.11.33,1.62,1.46,1.62s1.95-.58,1.95-.58v-8.09c0-.16.09-.28.26-.28h3.15c.16,0,.28.12.28.25Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.h.transition}
                    d="m50.75,10.84v16.52c-.01.13-.12.25-.26.25h-3.19c-.14,0-.26-.12-.26-.25l.03-7.06h-4.96v7.06c-.01.13-.12.25-.26.25h-3.19c-.12,0-.26-.12-.26-.25V10.84c0-.14.12-.25.26-.25h3.19c.14,0,.25.11.26.25v6.08h4.96v-6.08c.01-.14.12-.25.26-.25h3.16c.14,0,.25.12.26.25Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.t.transition}
                    d="m36.99,25.14v2.23c0,.11-.04.21-.13.24-.15.08-1.11.33-1.91.33-1.74,0-4.29-.37-4.29-4v-4.88h-1.66c-.14,0-.26-.11-.26-.28v-2.02c0-.12.08-.22.2-.25.1-.02,1.74-.42,1.74-.42v-3.23c0-.11.07-.19.21-.19h3.24c.13,0,.21.08.21.19v3.14h2.38c.12,0,.24.12.24.25v2.53c0,.16-.1.28-.24.28h-2.38v4.66c0,.69.4,1.23,1.57,1.23.37,0,.72-.07.86-.07.13.02.22.13.22.26Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.i.transition}
                    d="m27.79,13.01h0c0,1.14-.91,2.05-2.04,2.05s-2.07-.9-2.07-2.05.92-2.05,2.07-2.05h.02c1.12,0,2.03.93,2.02,2.05Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.i.transition}
                    d="m27.58,16.24v10.95c0,.27-.07.4-.37.4h-2.88c-.26,0-.45-.1-.45-.4v-10.91c0-.16.12-.29.25-.29h3.2c.14,0,.25.11.25.25Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
                <motion.path
                    initial={gitHubLetterInit}
                    animate={gitHubLetteranimate}
                    transition={gitHubLetter.g.transition}
                    d="m22.18,17.9v8.53c0,.06-.01.17-.09.2,0,0-1.87,1.32-4.96,1.32-3.74,0-8.16-1.16-8.16-8.8s3.87-9.21,7.65-9.2c3.27,0,4.59.73,4.8.86.06.08.09.14.09.21l-.63,2.65c0,.13-.14.29-.3.25-.54-.16-1.35-.49-3.26-.49-2.2,0-4.57.62-4.57,5.54s2.25,5.5,3.87,5.5c1.38,0,1.87-.16,1.87-.16v-3.42h-2.2c-.17,0-.29-.12-.29-.25v-2.74c0-.13.12-.25.29-.25h5.61c.16,0,.28.12.28.25Z"
                    style={{
                        fill: "#c1c1c1",
                        strokeWidth: 0,
                    }}
                />
            </g>
            <motion.path
                d="m249.8,11.75c4.31,0,8.47.55,12.47,1.65,4.01,1.1,7.74,2.69,11.19,4.77,3.45,2.08,6.62,4.53,9.49,7.34,2.87,2.81,5.34,5.98,7.38,9.49,2.05,3.52,3.62,7.26,4.72,11.24s1.67,8.13,1.7,12.47c0,5.04-.76,9.91-2.29,14.58-1.53,4.68-3.71,8.97-6.56,12.89s-6.22,7.34-10.14,10.27c-3.91,2.94-8.29,5.21-13.12,6.83-.09.03-.23.05-.41.05s-.32.02-.41.05c-.73,0-1.31-.21-1.74-.64s-.64-.99-.64-1.7v-6.42c0-2.11.02-4.27.05-6.47,0-1.56-.23-3.13-.69-4.72-.46-1.59-1.28-2.92-2.48-3.99,3.55-.4,6.65-1.12,9.31-2.16s4.89-2.51,6.7-4.4,3.15-4.19,4.04-6.88,1.35-5.93,1.38-9.72c0-2.38-.4-4.63-1.19-6.74s-2-4.07-3.62-5.87c.34-.86.58-1.74.73-2.66s.23-1.83.23-2.75c0-1.19-.12-2.37-.37-3.53-.24-1.16-.6-2.32-1.05-3.49-.15-.06-.32-.09-.5-.09h-.5c-.98,0-2,.15-3.07.46s-2.12.7-3.16,1.19-2.06,1.02-3.07,1.61c-1.01.58-1.88,1.13-2.61,1.65-3.82-1.07-7.74-1.61-11.74-1.61s-7.92.54-11.74,1.61c-.76-.52-1.64-1.07-2.61-1.65-.98-.58-1.99-1.1-3.03-1.56s-2.11-.86-3.21-1.19-2.12-.5-3.07-.5h-.5c-.18,0-.35.03-.5.09-.43,1.13-.76,2.28-1.01,3.44-.24,1.16-.38,2.35-.41,3.58,0,.92.08,1.83.23,2.75.15.92.4,1.8.73,2.66-1.62,1.77-2.83,3.71-3.62,5.82-.79,2.11-1.19,4.37-1.19,6.79,0,3.73.44,6.96,1.33,9.68.89,2.72,2.23,5.01,4.04,6.88,1.8,1.87,4.04,3.35,6.7,4.45,2.66,1.1,5.76,1.83,9.31,2.2-.89.79-1.56,1.74-2.02,2.84s-.78,2.25-.96,3.44c-.83.4-1.7.7-2.61.92s-1.83.32-2.75.32c-1.96,0-3.58-.46-4.86-1.38s-2.43-2.17-3.44-3.76c-.37-.58-.81-1.16-1.33-1.74s-1.09-1.1-1.7-1.56-1.27-.83-1.97-1.1-1.44-.43-2.2-.46h-.55c-.24,0-.47.05-.69.14s-.43.18-.64.28-.31.24-.28.46c0,.37.21.72.64,1.05s.78.61,1.05.83l.14.09c.67.52,1.25,1.01,1.74,1.47s.95.96,1.38,1.51.78,1.13,1.05,1.74.63,1.33,1.05,2.16c1.04,2.38,2.49,4.11,4.36,5.18,1.87,1.07,4.11,1.62,6.74,1.65.79,0,1.59-.05,2.38-.14s1.59-.23,2.38-.41v7.98c0,.73-.21,1.31-.64,1.74s-1.02.64-1.79.64h-.37c-.15,0-.29-.03-.41-.09-4.8-1.56-9.17-3.81-13.12-6.74s-7.32-6.37-10.14-10.32-4.98-8.26-6.51-12.93c-1.53-4.68-2.31-9.54-2.34-14.58,0-4.31.55-8.47,1.65-12.47s2.69-7.74,4.77-11.19c2.08-3.45,4.53-6.62,7.34-9.49,2.81-2.87,5.98-5.34,9.49-7.38,3.52-2.05,7.26-3.62,11.24-4.72,3.97-1.1,8.13-1.67,12.47-1.7"
                style={{
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",


                }}
                initial={{pathLength: 0, fill: 'none', strokeWidth: 1,}}
                animate={{pathLength: 1, fill: '#3D154F', strokeWidth: 0}}
                transition={{
                    duration: 2 , ease: [0.741, 0, 0, 0.991],
                    fill: {
                        delay: 2,
                        duration: .5
                    },
                    strokeWidth: {
                        delay: 2,
                        duration: .5
                    }
                }}
            />
            <motion.path
                d="m249.8,11.75c4.31,0,8.47.55,12.47,1.65,4.01,1.1,7.74,2.69,11.19,4.77,3.45,2.08,6.62,4.53,9.49,7.34,2.87,2.81,5.34,5.98,7.38,9.49,2.05,3.52,3.62,7.26,4.72,11.24s1.67,8.13,1.7,12.47c0,5.04-.76,9.91-2.29,14.58-1.53,4.68-3.71,8.97-6.56,12.89s-6.22,7.34-10.14,10.27c-3.91,2.94-8.29,5.21-13.12,6.83-.09.03-.23.05-.41.05s-.32.02-.41.05c-.73,0-1.31-.21-1.74-.64s-.64-.99-.64-1.7v-6.42c0-2.11.02-4.27.05-6.47,0-1.56-.23-3.13-.69-4.72-.46-1.59-1.28-2.92-2.48-3.99,3.55-.4,6.65-1.12,9.31-2.16s4.89-2.51,6.7-4.4,3.15-4.19,4.04-6.88,1.35-5.93,1.38-9.72c0-2.38-.4-4.63-1.19-6.74s-2-4.07-3.62-5.87c.34-.86.58-1.74.73-2.66s.23-1.83.23-2.75c0-1.19-.12-2.37-.37-3.53-.24-1.16-.6-2.32-1.05-3.49-.15-.06-.32-.09-.5-.09h-.5c-.98,0-2,.15-3.07.46s-2.12.7-3.16,1.19-2.06,1.02-3.07,1.61c-1.01.58-1.88,1.13-2.61,1.65-3.82-1.07-7.74-1.61-11.74-1.61s-7.92.54-11.74,1.61c-.76-.52-1.64-1.07-2.61-1.65-.98-.58-1.99-1.1-3.03-1.56s-2.11-.86-3.21-1.19-2.12-.5-3.07-.5h-.5c-.18,0-.35.03-.5.09-.43,1.13-.76,2.28-1.01,3.44-.24,1.16-.38,2.35-.41,3.58,0,.92.08,1.83.23,2.75.15.92.4,1.8.73,2.66-1.62,1.77-2.83,3.71-3.62,5.82-.79,2.11-1.19,4.37-1.19,6.79,0,3.73.44,6.96,1.33,9.68.89,2.72,2.23,5.01,4.04,6.88,1.8,1.87,4.04,3.35,6.7,4.45,2.66,1.1,5.76,1.83,9.31,2.2-.89.79-1.56,1.74-2.02,2.84s-.78,2.25-.96,3.44c-.83.4-1.7.7-2.61.92s-1.83.32-2.75.32c-1.96,0-3.58-.46-4.86-1.38s-2.43-2.17-3.44-3.76c-.37-.58-.81-1.16-1.33-1.74s-1.09-1.1-1.7-1.56-1.27-.83-1.97-1.1-1.44-.43-2.2-.46h-.55c-.24,0-.47.05-.69.14s-.43.18-.64.28-.31.24-.28.46c0,.37.21.72.64,1.05s.78.61,1.05.83l.14.09c.67.52,1.25,1.01,1.74,1.47s.95.96,1.38,1.51.78,1.13,1.05,1.74.63,1.33,1.05,2.16c1.04,2.38,2.49,4.11,4.36,5.18,1.87,1.07,4.11,1.62,6.74,1.65.79,0,1.59-.05,2.38-.14s1.59-.23,2.38-.41v7.98c0,.73-.21,1.31-.64,1.74s-1.02.64-1.79.64h-.37c-.15,0-.29-.03-.41-.09-4.8-1.56-9.17-3.81-13.12-6.74s-7.32-6.37-10.14-10.32-4.98-8.26-6.51-12.93c-1.53-4.68-2.31-9.54-2.34-14.58,0-4.31.55-8.47,1.65-12.47s2.69-7.74,4.77-11.19c2.08-3.45,4.53-6.62,7.34-9.49,2.81-2.87,5.98-5.34,9.49-7.38,3.52-2.05,7.26-3.62,11.24-4.72,3.97-1.1,8.13-1.67,12.47-1.7"
                style={{
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 0,
                    fill: '#3D154F',
                    filter:'blur(20px)',
                    translateX : -10

                }}
                initial={{opacity : 0}}
                animate={{opacity : 1}}
                transition={{
                    duration: 2 , ease: [0.741, 0, 0, 0.991],delay : 2.4
                }}
            />
            <motion.g
                initial={{
                    opacity: 0,
                    filter: 'blur(8px)',
                    translateX: 50
                }}
                animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                transition={{delay: 1, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                style={{
                    filter: "url(#drop-shadow-5)",
                }}
            >
                <path
                    d="m179.19,81.37h-33.73c-1.66,0-2.51-1.34-1.91-3l12.34-33.89c.6-1.66,2.44-3,4.1-3h33.73c1.66,0,2.51,1.34,1.91,3l-12.34,33.89c-.6,1.66-2.44,3-4.1,3Z"
                    style={{
                        fill: "#1c222b",
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m186.53,61.28h-33.78c-1.64,0-3.46,1.33-4.06,2.98l-5.15,14.14c-.6,1.64.25,2.98,1.89,2.98h33.78c1.64,0,3.46-1.33,4.06-2.98l5.15-14.14c.6-1.64-.25-2.98-1.89-2.98Z"
                    style={{
                        fill: "url(#linear-gradient-green)",
                        opacity: 0.47,
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m159.38,65.47c.5-1.36.74-2.04,1.25-2.54.22-.21.47-.39.73-.53.61-.33,1.29-.33,2.65-.33s2.04,0,2.42.33c.16.14.28.32.34.53.15.49-.1,1.17-.6,2.54s-.74,2.04-1.25,2.53c-.22.21-.47.39-.73.54-.61.33-1.29.33-2.65.33s-2.04,0-2.42-.33c-.16-.14-.28-.32-.34-.54-.15-.49.1-1.17.6-2.53Zm10.53.95c-.64-1.01-.96-1.51-.85-2.11.04-.24.13-.48.26-.72.33-.6,1.02-1.11,2.39-2.11s2.06-1.51,2.7-1.62c.25-.04.5-.04.72,0,.56.11.88.61,1.52,1.62.64,1.01.96,1.51.85,2.11-.04.24-.13.48-.26.72-.33.6-1.02,1.11-2.39,2.11-1.37,1.01-2.06,1.51-2.7,1.62-.25.04-.5.04-.72,0-.56-.11-.88-.61-1.52-1.62h0Zm-1.89-12.33c.96-1.32,1.44-1.98,2.06-2.33.26-.15.53-.26.8-.32.64-.15,1.21.09,2.35.57,1.14.48,1.71.72,1.89,1.21.07.21.1.44.07.69-.07.59-.55,1.25-1.51,2.56-.96,1.32-1.44,1.98-2.06,2.33-.26.15-.53.26-.8.32-.64.15-1.21-.09-2.35-.57-1.14-.48-1.71-.72-1.89-1.21-.08-.21-.1-.44-.07-.69.07-.59.55-1.25,1.51-2.56Z"
                    style={{
                        fill: "none",
                        filter: "url(#drop-shadow-6)",
                        stroke: "url(#linear-gradient-2)",
                        strokeLinejoin: "round",
                        strokeWidth: "1.46px",
                    }}
                />
            </motion.g>
            <motion.g
                initial={{
                    opacity: 0,
                    filter: 'blur(8px)',
                    translateX: 50
                }}
                animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                transition={{delay: 1.2, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                style={{
                    filter: "url(#drop-shadow-7)",
                }}
            >
                <path
                    d="m92.91,85.42H22.12c-2.34,0-3.55-1.9-2.7-4.24l11.43-31.42c.85-2.34,3.44-4.24,5.79-4.24h70.79c2.34,0,3.55,1.9,2.7,4.24l-11.43,31.42c-.85,2.34-3.44,4.24-5.79,4.24Z"
                    style={{
                        fill: "#1c222b",
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m64.73,65.32H28.16c-1.64,0-3.45,1.33-4.05,2.97l-4.71,12.95c-.84,2.31.35,4.18,2.66,4.18h35.37l7.31-20.09Z"
                    style={{
                        fill: "url(#linear-gradient-3)",
                        opacity: 0.47,
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m100.26,65.32h-35.53l-7.31,20.09h35.53c2.32,0,4.89-1.88,5.74-4.21l4.25-11.68c.85-2.32-.35-4.21-2.68-4.21Z"
                    style={{
                        fill: "url(#linear-gradient-4)",
                        opacity: 0.47,
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m67.94,65.58h-2.83l1.03-2.83c.09-.26-.04-.47-.3-.47s-.55.21-.64.47l-1.03,2.83h-2.83c-.26,0-.55.21-.64.47s.04.47.3.47h2.83l-1.03,2.83c-.09.26.04.47.3.47s.55-.21.64-.47l1.03-2.83h2.83c.26,0,.55-.21.64-.47s-.04-.47-.3-.47"
                    style={{
                        fill: "#fff",
                        strokeWidth: 0,
                    }}
                />
                <g>
                    <path
                        d="m84.39,67.62c.76,0,1.6-.62,1.88-1.38s-.12-1.38-.88-1.38-1.6.62-1.88,1.38.12,1.38.88,1.38"
                        style={{
                            fill: "#4cc7ed",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        d="m85.91,63.44c1.85,0,3.47.27,4.61.71,1.37.54,2.03,1.35,1.76,2.09s-1.61,1.64-3.49,2.19c-1.42.42-3.17.64-4.93.64s-3.43-.21-4.56-.64c-1.42-.55-2.08-1.43-1.8-2.19s1.48-1.54,3.21-2.08c1.47-.45,3.33-.73,5.2-.73h0Z"
                        style={{
                            fill: "none",
                            stroke: "#4cc7ed",
                            strokeWidth: ".66px",
                        }}
                    />
                    <path
                        d="m82.96,64.85c1.51-1.6,3.09-2.96,4.45-3.86,1.64-1.08,2.98-1.51,3.49-1.14.53.38.29,1.7-.7,3.43-.75,1.31-1.96,2.86-3.39,4.39-1.47,1.56-3,2.94-4.35,3.83-1.7,1.13-3.1,1.54-3.62,1.16-.5-.37-.31-1.56.58-3.17.75-1.35,2-3.02,3.52-4.64h0Z"
                        style={{
                            fill: "none",
                            stroke: "#4cc7ed",
                            strokeWidth: ".66px",
                        }}
                    />
                    <path
                        d="m81.94,67.67c-.34-1.6-.39-3.22-.16-4.57.27-1.62.95-2.86,1.72-3.23.81-.39,1.9.06,2.8,1.24.68.89,1.22,2.22,1.54,3.74.34,1.56.44,3.14.22,4.47-.28,1.68-1.02,2.97-1.81,3.35-.77.37-1.79-.02-2.64-1.09-.72-.9-1.33-2.29-1.68-3.91Z"
                        style={{
                            fill: "none",
                            stroke: "#4cc7ed",
                            strokeWidth: ".66px",
                        }}
                    />
                </g>
                <g>
                    <path
                        d="m48.33,59.73c.07.16.06.38.03.81l-.56,9.48c-.88-.56-1.9-.96-3.03-1.17l.43-6.35c0-.13-.1-.2-.24-.17-.03,0-.06.02-.09.04-.05.03-.1.08-.13.13l-4.17,6.35c-1.28.21-2.6.61-3.89,1.17l6.35-9.48c.29-.43.44-.65.62-.81.17-.14.35-.25.55-.32.22-.08.45-.08.9-.08h2.07c.45,0,.68,0,.84.08.14.07.25.18.32.32"
                        style={{
                            fill: "#e5e4e6",
                            fillRule: "evenodd",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        d="m44.76,70.48c-.62.41-1.67.68-2.77.68-1.34,0-2.32-.42-2.41-.98-.22.32-.38.69-.47.93,0,0-.49,1.16.02,1.96.15-.42.61-.76,1.03-.76.72,0,.49.62.3,1.13l-.02.05c-.28.77-.05,1.43.52,1.71-.03-.21,0-.44.09-.68.27-.73.8-1.01,1.41-1.32.49-.25,1.03-.53,1.54-1.1.27-.3.48-.64.61-.99.08-.22.12-.43.13-.63"
                        style={{
                            fill: "#ff5d01",
                            fillRule: "evenodd",
                            strokeWidth: 0,
                        }}
                    />
                    <path
                        d="m44.76,70.48c-.62.41-1.67.68-2.77.68-1.34,0-2.32-.42-2.41-.98-.22.32-.38.69-.47.93,0,0-.49,1.16.02,1.96.15-.42.61-.76,1.03-.76.72,0,.49.62.3,1.13l-.02.05c-.28.77-.05,1.43.52,1.71-.03-.21,0-.44.09-.68.27-.73.8-1.01,1.41-1.32.49-.25,1.03-.53,1.54-1.1.27-.3.48-.64.61-.99.08-.22.12-.43.13-.63"
                        style={{
                            fill: "url(#linear-gradient-5)",
                            fillRule: "evenodd",
                            strokeWidth: 0,
                        }}
                    />
                </g>
            </motion.g>
            <motion.g
                initial={{
                    opacity: 0,
                    filter: 'blur(8px)',
                    translateX: 50
                }}
                animate={{opacity: 1, filter: 'blur(0px)', translateX: 0}}
                transition={{delay: 1.4, duration: 1, ease: [0.623, 0.421, 0, 0.985]}}
                style={{
                    filter: "url(#drop-shadow-8)",
                }}
            >
                <path
                    d="m157.51,53.91h-70.79c-2.34,0-3.55-1.9-2.7-4.24l11.43-31.42c.85-2.34,3.44-4.24,5.79-4.24h70.79c2.34,0,3.55,1.9,2.7,4.24l-11.43,31.42c-.85,2.34-3.44,4.24-5.79,4.24Z"
                    style={{
                        fill: "#1c222b",
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m129.43,33.81h-36.67c-1.64,0-3.46,1.33-4.05,2.97l-4.71,12.94c-.84,2.31.35,4.18,2.66,4.18h35.46l7.31-20.09Z"
                    style={{
                        fill: "url(#linear-gradient-6)",
                        opacity: 0.47,
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m120.81,29.73s0,.05-.02.07l-1.33,3.65s-.05.09-.08.13c-.04.04-.08.07-.13.1l-3.67,1.76-1.27,3.5c-.03.09-.12.18-.22.23l-7.65,3.68s-.04.01-.05.02c0,0-.01,0-.02,0-.05.01-.09.01-.13,0,0,0-.01,0-.02,0-.01,0-.03,0-.04-.02l-4.97-3.68s-.05-.06-.06-.1c0-.04,0-.09.01-.13l3.99-10.96s.02-.05.03-.07c0,0,.01-.01.02-.02.01-.01.02-.03.03-.04,0,0,.02-.02.03-.02.01-.01.02-.02.03-.03.01,0,.02-.01.03-.02.01,0,.02-.02.04-.02h0l3.82-1.84c.1-.05.2-.05.26,0l2.48,1.84h0s.01.01.02.02c0,0,.01.01.02.02,0,0,0,.02.01.03,0,0,0,.01,0,.02,0,.01,0,.03,0,.04,0,0,0,.01,0,.02,0,.02,0,.05-.02.07l-2.49,6.84,3.19-1.53,1.27-3.5s.02-.05.03-.07c0,0,.01-.02.02-.02.01-.01.02-.03.03-.04,0,0,.02-.02.03-.02.01-.01.02-.02.03-.03.01,0,.02-.01.03-.02.01,0,.02-.02.04-.02h0l3.83-1.84c.1-.05.2-.05.26,0l2.48,1.84s.01.01.02.02c0,0,.01.01.02.02,0,0,0,.02.01.03,0,0,0,.01,0,.02,0,.01,0,.03,0,.04,0,0,0,.01,0,.02m-1.82,3.57l1.11-3.04-1.34.64-1.85.89-1.11,3.04,3.19-1.53h0Zm-5.15,5.49l1.11-3.04-1.82.87-5.19,2.48-1.12,3.07,7.01-3.38Zm-8.33-10.34l-3.76,10.34,4.55,3.38,1.12-3.07-2.39-1.73h0s0,0,0,0c0,0-.01-.01-.02-.02,0,0-.01-.01-.02-.02h0s0-.02-.01-.03c0,0,0-.02-.01-.03h0s0-.02,0-.03c0,0,0-.02,0-.03h0s0-.03,0-.04c0,0,0-.02,0-.03l2.6-7.15-1.2-.89-.87-.64h0Zm3.62-2l-3.19,1.53,2.07,1.53,3.19-1.53-2.07-1.53h0Zm-2.12,9.57l1.85-.89,2.43-6.69-1.34.64-1.85.89-2.43,6.69,1.34-.64Zm10.92-7.76l-3.19,1.53,2.07,1.53,3.19-1.53-2.07-1.53Zm-1.55,3.53l-1.2-.89-.87-.64-1.11,3.04,1.2.89.87.64,1.11-3.04Zm-8.54,6.84l4.67-2.23,2.33-1.12-2.07-1.53-3.67,1.77-3.34,1.61,2.08,1.51Z"
                    style={{
                        fill: "#ec1c24",
                        fillRule: "evenodd",
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m145.1,32.22c1.54-2.5,3.56-3.76,6.06-3.76,3.76,0,3.2,2.82,4.91,3.29,1.14.31,2.4-.16,3.8-1.41-1.54,2.5-3.56,3.76-6.06,3.76-3.76,0-3.2-2.82-4.91-3.29-1.14-.31-2.4.16-3.8,1.41m-6.74,5.63c1.54-2.5,3.56-3.76,6.06-3.76,3.76,0,3.2,2.82,4.91,3.29,1.14.31,2.4-.16,3.8-1.41-1.54,2.5-3.56,3.76-6.06,3.76-3.76,0-3.2-2.82-4.91-3.29-1.14-.31-2.4.16-3.8,1.41"
                    style={{
                        fill: "url(#linear-gradient-7)",
                        fillRule: "evenodd",
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m164.86,33.81h-35.53l-7.31,20.09h35.53c2.32,0,4.89-1.88,5.74-4.21l4.25-11.68c.85-2.32-.35-4.21-2.68-4.21Z"
                    style={{
                        fill: "url(#linear-gradient-8)",
                        opacity: 0.47,
                        strokeWidth: 0,
                    }}
                />
                <path
                    d="m132.54,34.07h-2.83l1.03-2.83c.09-.26-.04-.47-.3-.47s-.55.21-.64.47l-1.03,2.83h-2.83c-.26,0-.55.21-.64.47s.04.47.3.47h2.83l-1.03,2.83c-.09.26.04.47.3.47s.55-.21.64-.47l1.03-2.83h2.83c.26,0,.55-.21.64-.47s-.04-.47-.3-.47"
                    style={{
                        fill: "#fff",
                        strokeWidth: 0,
                    }}
                />
            </motion.g>
        </svg>
    )

};
export default Github;
