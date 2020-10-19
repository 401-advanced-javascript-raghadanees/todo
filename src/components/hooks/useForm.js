
import { useState } from 'react'
// generic form handler that will handle a set of fields for me
// No JSX no return for it;

const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        console.log("Generic submit handler ...")
        e.preventDefault();
        // e.target.reset();
        callback(values)
        setValues({ ...values, [e.target.name]: e.target.value });
        // setValues({});
    }
    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("Generic Change Handler ...")
    }
    
    // return [handleSubmit, handleInputChange, values];
    return [handleSubmit, handleInputChange ];

}

export default useForm;