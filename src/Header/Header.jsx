import './Header.scss'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
            <ul >
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
        </header>
    )
}

export default Header;