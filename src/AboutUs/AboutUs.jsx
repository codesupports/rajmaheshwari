import './AboutUs.scss';

const AboutUs = () => {
    return (
        <section className="aboutus__block">
            <div className='position-relative'>
                <h1>About <span>US</span></h1>
                <span className='heading-transparent'>PROFILE</span>
            </div>

            <div className='aboutus__wrapper'>
                <div className='aboutus__left width-50'>

                    <h3>personal infos </h3>
                    <div className='persoanl__info d-flex justify-between'>
                        <div className='basic-1'>
                            <div>
                                <span>First Name :</span> <span>Raj</span>
                            </div>
                            <div>
                                <span>Last Name :</span> <span>Maheshwari</span>
                            </div>
                            <div>
                                <span>Age :</span> <span>27</span>
                            </div>
                            <div>
                                <span>Nationality :</span> <span>Indian</span>
                            </div>
                            <div>
                                <span>Freelance  :</span> <span>Available</span>
                            </div>
                        </div>
                        <div className='basic-1'>
                            <div className='basic-1'>
                                <div>
                                    <span>Address  :</span> <span>New Delhi</span>
                                </div>
                                <div>
                                    <span>Mobile :</span> <span>+91 9958341624</span>
                                </div>
                                <div>
                                    <span>email  :</span> <span>raj.mah55@gmail.com</span>
                                </div>
                                <div>
                                    <span>Skype :</span> <span>designer.raj</span>
                                </div>
                                <div>
                                    <span>Langages   :</span> <span>English, Hindi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aboutus__right d-flex flex-wrap width-50'>
                    <div className='width-50 px-15'>
                        <div className="aboutus__info-sec">
                            <h3>11</h3>
                            <p>Industry <span>Experience</span></p>
                        </div>
                    </div>
                    <div className='width-50 px-15'>
                        <div className="aboutus__info-sec">
                            <h3>8</h3>
                            <p>Frontend<span>Experience</span></p>
                        </div>
                    </div>
                    <div className='width-50 px-15'>
                        <div className="aboutus__info-sec">
                            <h3>40</h3>
                            <p>completed <span>projects</span></p>
                        </div>
                    </div>
                    <div className='width-50 px-15'>
                        <div className="aboutus__info-sec">
                            <h3>12</h3>
                            <p>awards <span>won</span></p>
                        </div>
                    </div>

                </div>

            </div>
            <h4>my skills</h4>
            <div className='d-flex flex-wrap'>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>85%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>HTML5</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>86%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>CSS</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>65%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>JavaScript</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>70%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>React Js</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>60%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>Redux / Redux Toolkit</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>75%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>Bootstrap, Tailwind, MUI</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>75%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>SCSS</h6>
                </div>
                <div className='width-25 skill-wrapper'>
                    <div className="skill-black">
                        <span>60%</span>
                        <div className="selected">
                            <div className='bar'></div>
                            <div className='fill'></div>
                        </div>
                    </div>
                    <h6>GIT/NPM</h6>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;