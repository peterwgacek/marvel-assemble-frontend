
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/userService';

export default function LoginPage(props) {

    // Component State
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    });

    //Handler Functions
    function handleChange(event) {
        setFormState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleSumit(event) {
        if (!formValid()) return; // stop program execution and get out

    }

    //Helper Function
    function formValid() {
        return !!(formState.email && formState.password)
    }

    return (
        <main className="Page">
            <h1>
                Login Page
         </h1>
            <form>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input name="email" placeholder="Email" className="form-control" type="email" value={formState.email} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input name="password" placeholder="Password" className="form-control" type="password" value={formState.password} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input disabled={!formValid()} value="JOIN" className="form-control" type="sumbit" />
                        &nbsp;&nbsp;
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </form>
        </main>
    );
}

