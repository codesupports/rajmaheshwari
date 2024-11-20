import './ContactUs.scss';

const ContactUs = () => {
    return (
        <section className="contactus__block">
            <div className='position-relative'>
                <h1>Contact <span>US</span></h1>
                <span className='heading-transparent'>CONNECT</span>
            </div>

            <div className='contactus__wrapper'>
                <div className='contactus__left width-50'>
                    <h3>don't be shy !</h3>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className='persoanl__info d-flex justify-between'>
                        <div className='basic-1'>
                            <div className='row'>
                                <span>Mail Me</span><br /><span>rajkumar.mah55@gmail.com</span>
                            </div>
                            <div>
                                <span>Call Me</span><br /><span>+91 9958341624</span>
                            </div>
                        </div>
                    </div>
                    <ul className='social-media'>
                        <li><a href="https://www.linkedin.com/in/raj-maheshwari-48b32923/" target='_blank'><i className='fa fa-linkedin'></i></a></li>
                        <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                        <li><a href="https://www.youtube.com/@Technical-Raj-maheshwari" target='_blank'><i className='fa fa-youtube'></i></a></li>
                        <li><a href="https://github.com/codesupports" target='_blank'><i className='fa fa-github'></i></a></li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default ContactUs;