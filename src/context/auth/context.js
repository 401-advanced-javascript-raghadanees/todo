import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const API = "https://todo-api-laith.herokuapp.com/api/v1/users";

class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn : false,
            login: this.login,
            logout: this.logout,
            user: {},
            signup: this.signup,
            isValidAction: this.isValidAction
        }

    }


    isValidAction = (action)=> {
        const actions = {
            admin: ['edit', 'delete', 'read'],
            user : ['read'],
            editor: ['edit', 'read']
        };

        const role = this.state.user.role.toLowerCase();
        console.log("role : ",role)
        console.log("actions[role].includes(action): ",actions[role].includes(action))
        return actions[role].includes(action)

    }

    signup = async (username, password, email, role) => {

        try {
            const result = await fetch(`${API}/signup`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password, email, role })
            });
            let res = await result.json();
            console.log("res Signup: ",res)
            this.validateToken(res.token);
        } catch (e) {
            console.log("error : ", e);

        }
    }


    login = async (username, password)=> {
        try {
            
            const encodedData = base64.encode(`${username}:${password}`);
            const result = await fetch(`${API}/signin`, {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Authorization': `Basic ${encodedData}` }
            });

            let res = await result.json();
            console.log("res signin: ",res)
            // res has token {token: token, user: user};
            this.validateToken(res.token);

        } catch(e) {
            console.log("error : ", e);
        }
    }

    validateToken = (token)=> { // here must be arrow fun
        // validate token using jwt 
        // we can use jwt.verify against secret-> .env //  let user = jwt.verify(token,'secret');
        console.log("token >>> ",token)
        let user = jwt.decode(token) // from docs its not very recommended .
        console.log("user >>>> ",user)
        // // jwt lets try without secret.
        // // get user object
        if (user) {
            this.setAuthState(true, token, user)  // to set cookie and update state.
        } 
    }

    setAuthState = (loggedIn, token, user)=> {
        console.log("here setAuthState ")
        cookie.save('auth', token);  // save token as a cookie in browser
        //update conext with user object 
        this.setState({loggedIn, user})
    }

    logout = ()=> {
        this.setAuthState(false, null, {});
    }


    componentDidMount() {
        // get the cookie -> validate cookie -> of valid -> update the state 
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthProvider;