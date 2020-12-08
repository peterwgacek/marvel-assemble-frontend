import './Header.css'

export default function Header(props) {
    return (
        <header className="Header">
            <h1>Logo Here</h1>
            <nav>
                <ul className="NavLinks">
                    <li>Logout</li>
                    <li>Dashboard</li>
                    <li>Signup</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
}
