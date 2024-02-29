### Controlled components
In React, a "controlled component" refers to a form element whose value is controlled by React state. Instead of allowing the form element to maintain its own state internally, the value is controlled by React and updated via state management.

```javascript
import React, { useState } from 'react';

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={inputValue} // value is controlled by React state
        onChange={handleChange} // onChange updates React state
      />
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default ControlledComponent;

```

# Uncontrolled Components:

- Uncontrolled components are components where form data is handled by the DOM itself, rather than React component state.
- The value of the form input elements is directly managed by the DOM through the `ref` attribute, and React does not track their state.
- Changes to the input elements are not controlled by React, but rather handled by DOM events (e.g., onChange, onInput).
- Uncontrolled components can be useful when integrating with third-party libraries because some libraries might expect to manage their own state internally.