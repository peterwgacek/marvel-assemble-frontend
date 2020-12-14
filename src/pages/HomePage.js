
import { Link } from 'react-router-dom';


export default function HomePage(props) {
    return (
        <main className="Page">

            <img src="/favicon.png" alt="hero" className="headerlogo" />
            <h1>
                Welcome True Believer to Marvel Assemble!
                </h1>
            <p>
                Here you can create your dream Avengers team. You need to create an account in order to save your team but you don't need an account to get started. Hit the ASSEMBLE link at top of the page or:  <Link to="/search">Click Here</Link>
            </p>

            <h1>
                Excelsior!
                </h1>
        </main>
    );
}

