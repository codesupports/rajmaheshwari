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
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>RWD</li>
                            <li>SCSS</li>
                            <li>Node</li>
                        </ul>
                    </div>
                    <div className="pannel__right">
                        <h1>Raj Maheshwari</h1>
                        <h2 className='designation'><span className='spin'></span> <span> Developer</span></h2>
                        <p>I am an experienced Frontend React.js Developer with over 8 years of expertise in creating responsive and high-performance web applications. My proficiency in <span className='highlight'>HTML, CSS, JavaScript and React.js,</span> combined with deep knowledge of state management tools like Redux, Redux-Toolkit and hooks, allows me to build scalable, maintainable, and optimized user interfaces. I am passionate about leveraging the latest frontend technologies to deliver exceptional user experiences.</p>
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