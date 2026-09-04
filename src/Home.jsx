import linkedinIcon from './assets/linkedin.svg'
import youtubeIcon from './assets/youtube.svg'
import githubIcon from './assets/github.svg'

import profilePic from '/raj-maheshwari.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="profile__block">
            <div className="profile__info">
                <p>Hello Everyone!</p>
                <div className="profile__desc">
                    <div className="pannel__left">
                        <ul>
                            <li>I'm</li>
                            <li>React JS</li>
                            <li>JavaScript</li>
                            <li>Next JS</li>
                            <li>TypeScript</li>
                            <li>Redux Toolkit</li>
                            <li>Rest API</li>
                            <li>HTML/CSS/Tailwind</li>
                            <li>RWD</li>
                            <li>Github Copilot</li>
                        </ul>
                    </div>
                    <div className="pannel__right">
                        <h1>Raj Maheshwari</h1>
                        <h2 className='designation'><span className='spin'></span> <span> Developer</span></h2>
                        <p>
                            Senior Frontend Engineer with 13 years of total experience including 6 years of Web Graphic Design and <span className='highlight'>7 years of relevant experience in React Frontend Development</span>. Experienced in designing and building
                            scalable, high-performance web applications using <span className='highlight'>React.js, Next.js, TypeScript, JavaScript (ES6+),
                                Redux Toolkit, and modern frontend technologies </span>. Expertise in frontend architecture, reusable
                            component libraries, responsive web applications, REST API integration, performance optimization,
                            state management, and WCAG-compliant accessibility, with a strong focus on delivering exceptional
                            user experiences.
                        </p>
                        {/* <p>I am an experienced Frontend React.js Developer with over 8 years of expertise in creating responsive and high-performance web applications. My proficiency in <span className='highlight'>HTML, CSS, JavaScript and React.js,</span> combined with deep knowledge of state management tools like Redux, Redux-Toolkit and hooks, allows me to build scalable, maintainable, and optimized user interfaces. I am passionate about leveraging the latest frontend technologies to deliver exceptional user experiences.</p> */}
                        <Link to="/About" className='more'>MORE ABOUT ME</Link>
                        <div className="social-icon">
                            <span>
                                <a href="https://www.linkedin.com/in/raj-maheshwari-48b32923/" target='_blank'>
                                    <img src={linkedinIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.youtube.com/@Technical-Raj-maheshwari?sub_confirmation=1" target='_blank'>
                                    <img src={youtubeIcon} alt="" />
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/codesupports" target='_blank'>
                                    <img src={githubIcon} alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile__photo">
                <img src={profilePic} alt='' />
            </div>
        </div>
    )
}

export default Home;