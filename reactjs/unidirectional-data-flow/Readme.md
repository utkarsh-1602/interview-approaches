# How does data flow in React? Can you explain the concept of "unidirectional data flow"?

In React, data flows in a unidirectional manner, which means it follows a single direction. This concept is often referred to as "unidirectional data flow." 

1. **Parent to Child**: Data is passed from parent components to child components via props. Parent components can pass data or callbacks to child components, which allows child components to receive data from their parent and render it accordingly.

2. **Child to Parent**: Child components can communicate with parent components by invoking callback functions passed to them as props. When an event or action occurs in a child component, it can trigger a callback function provided by the parent, passing data or event information back to the parent component.

3. **No Direct Component-to-Component Communication**: In a unidirectional data flow, components typically don't communicate directly with each other. Instead, they rely on props and callbacks to pass data and trigger actions.

