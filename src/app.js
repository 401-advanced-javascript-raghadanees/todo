import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';
import SettingsContext from './context/settings/context';
import Auth from './context/auth/auth.js';
import Login from './context/auth/login.js';
import AuthContext from './context/auth/context.js';
import Signup from './context/auth/signup.js';

// const DeleteLink = props => {
//   return (
//     <Auth action="delete">
//       <span>Fake Delete Link </span>
//     </Auth>
//   )
// }

// const ReadLink = props => {
//   return (
//     <Auth action="read">
//       <span>Fake Read Link </span>
//     </Auth>
//   )
// }

// const EditLink = props => {
//   return (
//     <Auth action="edit">
//       <span>Fake Edit Link </span>
//     </Auth>
//   )
// }

function App() {
  return (
    <>
      <SettingsContext>
        <ToDo />
      </SettingsContext>

      <AuthContext>
        <Login />
        <Signup />
        <hr />
        {/* <DeleteLink />
        <ReadLink />
        <EditLink /> */}
      </AuthContext>
    </>
  );
}

export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <ToDo />
//       </>
//     );
//   }
// }
