import { Route } from "react-router-dom";

export default function DashboardPage(props) {
    return (
        <main className="Page">
            <h1>
                Dashboard Page
         </h1>
        </main>
    );
}

<Route exact render={props =>
    <DashboardPage />
} />