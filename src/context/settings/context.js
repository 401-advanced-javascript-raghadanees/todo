import React, {useState} from 'react';


export const SettingsContext = React.createContext();

function SettingsProvider(props) {
    // as a state : tasksPerPage, showComplete, sort
    const [tasksPerPage, setTasksPerPage] = useState(3);
    const [sort, setSort] = useState('difficulty');
    const [showComplete, setShowComplete] = useState(false);
console.log('showComplete, setShowComplete',showComplete, setShowComplete)

    const state = {
        tasksPerPage, 
        sort, 
        showComplete,
        setTasksPerPage,
        setSort,
        setShowComplete
    }
    
    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
} 

export default SettingsProvider;