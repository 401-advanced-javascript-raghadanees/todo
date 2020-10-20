import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo from './components/todo/todo-connected';
import SettingsContext from './context/settings/context';

function App() {
  return (
    <>
      <SettingsContext>
        <ToDo />
      </SettingsContext>
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
