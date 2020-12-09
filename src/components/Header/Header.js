import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <Link to="/">
                <h1>Logo Here</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                            <>
                                <li><Link to="/dashboard">TEAMS</Link></li>
                                <li><Link to="" onClick={props.handleLogout}>LOGOUT</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/signup">SIGN UP</Link></li>
                                <li><Link to="/login">LOG IN</Link></li>
                            </>
                    }
                
                </ul>
            </nav>
        </header>
    );
}