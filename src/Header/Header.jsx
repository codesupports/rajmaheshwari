import { useState } from 'react'
import './Header.scss'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
const Header = () => {

    const [toggle, setToggle] = useState(false);
    const handleCheckboxChange = () => {
        setToggle(!toggle)
    }

    return (
        <header className="header ">
            <ul className='d-desktop'>
                <li className='desktop-nav'>
                    <Link to="/">
                        <div className=''>
                            <i className="fa fa-home" />
                            <h2>Home</h2>
                        </div>
                    </Link>
                </li>
                <li className='desktop-nav'>
                    <Link to="/About">
                        <div className=''>
                            <i className="fa fa-user" />
                            <h2>About</h2>
                        </div>
                    </Link>
                </li>
                <li className='desktop-nav'>
                    <Link to="/Contact">
                        <div className=''>
                            <i className="fa fa-envelope-open" />
                            <h2>Contact</h2>
                        </div>
                    </Link>
                </li>
            </ul>
            <nav className={`hidden d-mobile mobile-nav ${toggle == true ? "showSideNav" : "hideSideNav"}`}>
                <section>
                    <div className={`inputToggle`}>
                        <input type="checkbox" onChange={handleCheckboxChange} />
                        <span className='white-line' />
                        <span className='white-line' />
                        <span className='white-line' />
                    </div>
                    <ul>
                        <li onClick={handleCheckboxChange} >
                            <Link to="/">
                                <div><i className='fa fa-home' /><span>Home</span></div>
                            </Link>
                        </li>
                        <li onClick={handleCheckboxChange}>
                            <Link to="/About">
                                <div><i className='fa fa-user' /><span>About</span></div>
                            </Link>
                        </li>
                        <li onClick={handleCheckboxChange}>
                            <Link to="/Contact">
                                <div><i className='fa fa-envelope-open' /><span>Contact</span></div>
                            </Link>
                        </li>
                    </ul>
                </section>

            </nav>
        </header>
    )
}

export default Header;