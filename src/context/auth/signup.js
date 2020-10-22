import React from 'react';
import { AuthContext } from './context.js';
import Show from './show';
import { Form, Button, Card } from 'react-bootstrap';
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
                <Card style={{ width: '23.5rem', margin: '35%', marginTop: '5%' , marginBottom: '5%' }} >
                <Card.Text>
                    <h2>Sign up !</h2>
                  </Card.Text>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="username" placeholder="Enter User Name" name="username" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Form.Group  controlId="formGridState" onChange={this.handleChange}>
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="user">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="editors">Editor</option>
                            </Form.Control>
                        </Form.Group>
                        <Button style={{ paddingLeft: '45%', paddingRight: '40%' }} variant="dark" type="submit"> {<b>Submit</b>} </Button>
                    </Form>
                    </Card>
                    {/* <form onSubmit={this.handleSubmit} >
                        <input placeholder="userName" name="username" onChange={this.handleChange} /><br />
                        <input placeholder="password" name="password" type="password"  onChange={this.handleChange} /><br />
                        <input placeholder="email"  name="email"  onChange={this.handleChange} /><br />

                        <select onChange={this.handleChange} name="role">
                            <option value="user" >User</option>
                            <option value="admin" >Admin</option>
                            <option value="editors" >Editor</option>
                        </select><br />

                        <button>SIGN UP</button>
                    </form> */}
                </Show>
            </>
        )
    }

}

export default Signup;
