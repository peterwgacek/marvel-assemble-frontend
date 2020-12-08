import { Route } from "react-router-dom";

export default function SignupPage(props) {
    return (
        <main className="Page">
            <h1>
                Sign Up Page
         </h1>
        </main>
    );
}

<Route exact render={props =>
    <SignupPage />
} />