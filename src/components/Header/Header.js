import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <div>
                <Link to="/">
                    <img src="/logo.png" alt="hero" className="logo" />
                </Link>
            </div>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                            <>
                                <li><Link to="/search">SEARCH</Link></li>
                                <li><Link to="/dashboard">TEAMS</Link></li>
                                <li><Link to="" onClick={props.handleLogout}>LOGOUT</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/search">SEARCH</Link></li>
                                <li><Link to="/signup">SIGN UP</Link></li>
                                <li><Link to="/login">LOG IN</Link></li>
                            </>
                    }

                </ul>
            </nav >
        </header >
    );
}