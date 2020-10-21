import React from 'react';
import { AuthContext } from './context.js';
import Show from './show';

class Login extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("this.state in handleSubmit---",this.state);
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        console.log("this.context.loggedIn >..> ",this.context.loggedIn)

        return (
            <>
                <Show condition={this.context.loggedIn}>
                    <button onClick={this.context.logout}>Logout</button>
                </Show>
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <label>

                        </label>
                        <input onChange={this.handleChange} placeholder="username" name="username" />
                        <input onChange={this.handleChange} placeholder="password" name="password" />
                        <button>Login</button>
                    </form>
                </Show>
            </>
        )
    }

}

export default Login;