import {motion} from "framer-motion";

export default function TimeLine() {

    const experience = [
        {
            mainTitle: '🎉 The beginning of my journey (self-study)',
            date: '2020 - 2021',
            title: '‍👨‍💻 Started with: HTML, CSS, JavaScript, PHP',
            content: 'Learned the fundamentals of web development, including building static layouts, styling, and basic dynamic features for the client and server side.'
        },
        {
            mainTitle: '⚙️App and 🖌️Graphic designe',
            date: '2021 - 2022',
            title: 'Laravel - Illustrator - Photoshop',
            content:
                <div className='space-y-2 pl-2'>
                    <p><strong className='font-bold'>Adobe Illustrator , Adobe Photoshop : </strong> Began designing
                        user interfaces, web graphics, and branding assets.</p>
                    <p><strong className='font-bold'>Laravel (start):</strong> Gained initial experience with PHP’s
                        Laravel framework, building small backend projects to understand MVC architecture.</p>
                </div>
        },
        {
            mainTitle: '🌐Make BigStack (my own website)',
            date: '2022 - 2023',
            title: 'Laravel (Advanced) + Livewire + SEO + Tailwind CSS',
            content:
                <div className='space-y-2 pl-2'>
                    <p><strong className='font-bold'>Laravel (advanced) + Livewire: </strong> Built interactive, dynamic
                        web app without heavy JavaScript frameworks by combining Laravel with Livewire. <a
                            href='https://bigstack.ir/' className='text-blue-600' target='_blank'>BigStack</a></p>
                    <p><strong className='font-bold'>SEO:</strong> Learned search engine optimization techniques to
                        improve website visibility and ranking.</p>
                </div>
        },
        {
            mainTitle: '🌐Working on BigStack',
            date: '2023 - March 2025',
            title: 'Developing... and Deepening my skils',
            content:
                <div className='space-y-4 pl-2'>

                    <h4 className='text-lg font-bold'>
                        ⚡Skills
                    </h4>

                    <ul className='space-y-2 pl-5 📕' dir="auto">
                        <li><strong className='font-bold'>Backend:</strong> Laravel 12, PHP</li>
                        <li><strong className='font-bold'>Frontend:</strong> HTML, CSS, JavaScript, Tailwind CSS
                        </li>
                        <li><strong className='font-bold'>Security:</strong> Authentication workflows, OAuth, Data
                            encryption
                        </li>
                        <li><strong className='font-bold'>Databases:</strong> MySQL, MariaDB</li>
                        <li><strong className='font-bold'>Tools:</strong> Git, CI/CD pipelines, Laragon local server
                        </li>
                    </ul>

                    <h4 className='text-lg font-bold'>
                        🚀 Featured Projects
                    </h4>

                    <ul className='space-y-2 pl-5 ✅' dir="auto">
                        <li>Performance improvements: Optimized user experience with better load times, accessibility, and UX refinements.</li>
                        <li>High-security authentication (token-rotation to prevent breaches)</li>
                        <li>User login via Google or phone number</li>
                        <li>Caching Strategies (client-side, server-side, CDN)</li>
                        <li>Q&amp;A system for community interaction</li>
                        <li>ajax search(articles - projects - tags - categories - ...)</li>
                        <li>mega menu and other styles you can change</li>
                        <li>exper user panel (likes - bookmarks - converations - vots - user info - ajax change phone -
                            sessions management)
                        </li>
                        <li>advance rate-limit for Sensitive and repetitive activities</li>
                        <li>q&amp;a (set best answer - can add privet q for ticket by mentioned persons)</li>
                        <li>edit article (expert and custom editor.js with markdown)</li>
                        <li>builder (for page building with ready template) -- in development</li>
                        <li>modular system for better devlopment .</li>
                        <li>modules developed (content - activity log - user )</li>
                        <li style={{listStyle : "'⭕'"}}>modules for develop (q&amp;a - rule/permission - markable - comment - projects - booking -
                            shop - vip users - LMS)
                        </li>
                    </ul>

                </div>
        },
        {
            mainTitle: '🌱Next-Level Stack Roadmap',
            date: 'March 2025 - Now',
            title: '⚡Stack Growth',
            content:
                <div className='space-y-4 pl-2'>

                    <p><strong className='font-bold'>React.js: </strong>Started building modern, component‑based UIs,
                        focusing on interactive features. </p>
                    <p><strong className='font-bold'>Astro.js:</strong> Learned search engine optimization techniques to
                        improve website visibility and ranking.</p>

                    <h4 className='text-lg font-bold'>
                        🌟Start Git & GitHub
                    </h4>
                    <p>Adopted version control best practices and team collaboration workflows</p>
                    <h4 className='text-lg font-bold'>
                        📕study on :
                    </h4>
                    <ul className='space-y-2 pl-5 ✅' dir="auto">
                        <li>API Design (REST)</li>
                        <li>Security by Design (OWASP Top 10)</li>
                        <li>Tech Stack Decision-Making (criteria for selecting frameworks, databases, hosting)</li>
                        <li>Monitoring & Observability (logs, metrics, tracing)</li>
                        <li>CI/CD basics: Set up automated deployment pipelines to speed up and stabilize release
                            processes.
                        </li>
                    </ul>
                    <h4 className='text-lg font-bold'>
                        🕐queued :
                    </h4>
                    <ul className='space-y-2 pl-5 ⭕' dir="auto">
                        <li>Monolithic, Microservices, Serverless</li>
                        <li>Scalability concepts (horizontal vs vertical scaling)</li>
                        <li>Cloud Architecture (VPC, Load Balancers, CDN, caching layers)</li>
                        <li>API Design (GraphQL, gRPC)</li>
                        <li>Event-Driven Architecture (pub/sub, CQRS)</li>


                        {/*Creational Patterns*/}
                        {/*Singleton, Factory Method, Abstract Factory, Builder, Prototype*/}
                        {/*Structural Patterns*/}
                        {/*Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy*/}
                        {/*Behavioral Patterns*/}
                        {/*Observer, Strategy, Command, Chain of Responsibility, Mediator, Memento, State, Template Method, Visitor, Iterator*/}
                        {/*Enterprise Patterns*/}
                        {/*Repository, Unit of Work, Service Layer*/}
                        {/*Anti-Patterns (God Object, Spaghetti Code, etc.)*/}
                        {/*When/Why to Use Patterns (trade-offs, overengineering risks)*/}
                        {/*Pattern Naming & UML (class diagrams, sequence diagrams)*/}
                    </ul>

                </div>
        }
    ]



    return (
        <div className='fix-section-container pt-20'>
            <div className='timeline content-wraper'>

                {
                    experience.map((item, index) => {

                        return (
                            <div
                                key={index} className='timeline-box flex justify-center py-10'
                            >
                                <div className="left place-items-center">
                                    <motion.div
                                        className='indicator'
                                        style={{position : "sticky" , top : '40%'}}
                                        initial={{scale : 0 , opacity : 0 , filter : 'blur(10px)'}}
                                        whileInView={{scale : 1 , opacity : 1 , filter : 'blur(0px)'}}
                                        transition={{
                                            duration: .5,
                                            ease : [0.6,0.36,0,1.33]
                                        }}
                                        viewport={{ margin: "-10% 0px -10% 0px" }}
                                    ></motion.div>
                                </div>
                                <div className="right">
                                    <motion.div
                                        initial={{ opacity : 0 , filter : 'blur(10px)' ,translateX : 20}}
                                        whileInView={{ opacity : 1 , filter : 'blur(0px)' ,translateX : 0}}
                                        transition={{
                                            duration: .7,
                                            ease : [0.6,0.36,0,1]
                                        }}
                                        viewport={{ margin: "-15% 0px -15% 0px" }}
                                    >
                                        <h2 className='text-lg font-bold'>{item.mainTitle}</h2>
                                        <h2 className='text-lg font-light mt-3'>{item.date}</h2>
                                    </motion.div>

                                    <motion.div
                                        className='contnet  p-6 max-md:p-4 rounded-md mt-3'
                                        initial={{ opacity : 0 , filter : 'blur(10px)' ,translateX : 20}}
                                        whileInView={{ opacity : 1 , filter : 'blur(0px)' ,translateX : 0}}
                                        transition={{
                                            duration: .9,
                                            ease : [0.6,0.36,0,1]
                                        }}
                                        viewport={{ margin: "-15% 0px -15% 0px" }}
                                    >
                                        <h3 className='text-lg font-bold mb-4'>{item.title}</h3>
                                        <div className='font-light text-sm'>
                                            {item.content}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    )

}