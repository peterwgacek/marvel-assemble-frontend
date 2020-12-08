
import { Route } from "react-router-dom";

export default function LoginPage(props) {
    return (
        <main className="Page">
            <h1>
                Login Page
         </h1>
        </main>
    );
}

<Route exact render={props =>
    <LoginPage />
} />