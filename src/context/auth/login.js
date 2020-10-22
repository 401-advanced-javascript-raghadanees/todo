import React from 'react';
import { AuthContext } from './context.js';
import Show from './show';
import { Form, Button, Card } from 'react-bootstrap';

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
        console.log("this.state in handleSubmit---", this.state);
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        console.log("this.context.loggedIn >..> ", this.context.loggedIn)

        return (
            <>
                <Show condition={this.context.loggedIn}>
                    {/* <button onClick={this.context.logout}>Logout</button> */}
                    <Button variant="primary" type="submit" onClick={this.context.logout}> Logout </Button>

                </Show>
                <Show condition={!this.context.loggedIn}>
                    <Card style={{ width: '23.5rem', margin: '35%', marginTop: '2%' }} >
                        <Card.Text>
                            <h2>Or login!</h2>
                        </Card.Text>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="username" placeholder="Enter User Name" name="username" onChange={this.handleChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button style={{ paddingLeft: '45%', paddingRight: '43%' }} variant="light" type="submit"> {<b>Login</b>} </Button>
                        </Form>
                    </Card>
                    {/* <form onSubmit={this.handleSubmit}>
                        <label>

                        </label>
                        <input onChange={this.handleChange} placeholder="username" name="username" />
                        <input onChange={this.handleChange} placeholder="password" name="password" />
                        <button>Login</button>
                    </form> */}
                </Show>
            </>
        )
    }

}

export default Login;
