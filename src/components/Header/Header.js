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
                    <li><Link to="/dashboard">Teams</Link></li>
                    <li><Link to="/signup">Sign-Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
}