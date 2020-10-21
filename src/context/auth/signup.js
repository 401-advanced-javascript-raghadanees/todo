import React from 'react';
import { AuthContext } from './context.js';
import Show from './show';

class Signup extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            role: 'user',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("this.state in handleSubmit---", this.state);
        this.context.signup(this.state.username, this.state.password, this.state.email, this.state.role);
    }

    render() {
        console.log("this.context.loggedIn >.in signuprender.> ", this.context.loggedIn)

        return (
            <>
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit} >
                        <input placeholder="userName" name="username" onChange={this.handleChange} /><br />
                        <input placeholder="password" name="password" type="password"  onChange={this.handleChange} /><br />
                        <input placeholder="email"  name="email"  onChange={this.handleChange} /><br />

                        <select onChange={this.handleChange} name="role">
                            <option value="user" >User</option>
                            <option value="admin" >Admin</option>
                            <option value="editors" >Editor</option>
                        </select><br />

                        <button>SIGN UP</button>
                    </form>
                </Show>
            </>
        )
    }

}

export default Signup;