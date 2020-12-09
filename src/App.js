
import { useState } from 'react';

// Component Import
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Services imports
import { Switch, Route, withRouter } from "react-router-dom";
import { getUser } from './services/userService';

import './App.css';


function App(props) {
  // Component State
  const [userState, setUserState] = useState({ user: getUser() });

  //Helper Functions

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programtically route user to dashboard
    props.history.push('/dashboard');
  }

  return (
    <div className="App">
      <Header user={userState.user} />
      <Switch>
        <Route exact path="/" render={props =>
          <HomePage />
        } />
        <Route exact path="/dashboard" render={props =>
          <DashboardPage />
        } />
        <Route exact path="/signup" render={props =>
          <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
        } />
        <Route exact path="/login" render={props =>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
        } />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
