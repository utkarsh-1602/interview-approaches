# useContext() hook 
- The useContext() hook in React.js is used to consume data from a context in a functional component. It allows components to subscribe to a context and access its value.
- A context in React is a way to pass data through the component tree without having to pass props manually at every level. It provides a way to share values like themes, language preference, or in the previous example, form data, to all components in the tree.

### Usecase of useContext() with a scenario in a MERN stack Project

- Let's say you have a multi-step form where you need to pass data between different components without prop drilling (). You can use context to manage the state of the form and provide access to it across the components involved in the form.

> Prop drilling: Prop drilling is a pattern in React where data is passed down from a parent component to a child component through props, and then further down to subsequent child components in the component tree. This process continues until the data reaches the component where it is needed.

`FormContext.js`
```javascript
    // FormContext.js
    import React, { createContext, useState } from 'react';

    const FormContext = createContext();

    const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        // other form fields
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
        {children}
        </FormContext.Provider>
    );
    };

    export { FormProvider, FormContext };
```


`Step1.js`
```javascript
// Step1.js
import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const Step1 = () => {
const { formData, setFormData } = useContext(FormContext);

const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

return (
    <div>
    <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
    />
    {/* Other form fields and logic */}
    </div>
);
};

export default Step1;


```