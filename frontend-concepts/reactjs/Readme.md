# Important concepts of Reactjs

# React JS Folder Structure
Refer: https://blog.webdevsimplified.com/2022-07/react-folder-structure/

## What is Reactjs ? 
- React is a free and open-source front-end JavaScript library for building user interfaces based on components. 
- ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. 

## Important Concepts of Reactjs you should know as a frontend Developer 

### What is DOM ?
The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of HTML (or XML) documents as a tree-like model, where each node represents a part of the document, such as elements, attributes, and text.

### What is Virtual DOM ?
- It is JavaScript representation of the real DOM.
- When changes are made to the data or state of a web application, React re-renders the components affected by those changes.
- Instead of directly manipulating the Real DOM for every change, React first updates the Virtual DOM.
- React then compares the updated Virtual DOM with the previous version to determine the minimal set of changes needed to update the Real DOM.
Finally, React applies only those necessary changes to the Real DOM, resulting in efficient updates.


### What is difference between Elements and Components ? 

**React Elements**:
- React elements are the smallest building blocks of React applications. 
- React elements are typically created using JSX syntax or React.createElement() function.
- React elements describe what you want to see on the screen in terms of the desired UI, but they are not actual DOM elements.

```javascript 
const element = <h1>Hello, world!</h1>;
```

**React Components**:
- Components are the building blocks of a React application. They are like reusable pieces of code that represent different parts of a user interface.
- There are two types - Class Components and Functional Components.
Components can accept inputs called props and return React elements describing what should appear on the screen.
- React components are like little packages of code that you can use to build your website or app.
- Components can also have state, which allows them to manage dynamic data and respond to user interactions.


### What is difference between Class Components and Functional Components ? 

1. **Syntax:**
- Functional components are just JavaScript functions that accept props as arguments and return React elements.
- Class components are JavaScript classes that extend from React.Component and have a render method to return React elements.

2. **State Management**:
- Prior to React 16.8, functional components were stateless and could not hold their own state. With the introduction of Hooks, functional components can now use state and other React features through hooks like useState, useEffect, etc.
- Class components can hold their own state using this.state and can modify that state using this.setState(). They can also use lifecycle methods like componentDidMount, componentDidUpdate, etc., for managing side effects and component lifecycle.

3. **Lifecycle Methods**:
- Functional components cannot directly use lifecycle methods. However, with the introduction of Hooks, some of the lifecycle functionality can be achieved using useEffect and other hooks.
- Class components have access to lifecycle methods such as componentDidMount, componentDidUpdate, componentWillUnmount, etc., which allow developers to perform actions at specific points in the component's lifecycle.

### Component Lifecycle:
- In React, the component lifecycle refers to the series of stages that a React component goes through from its initialization to its removal from the DOM (Document Object Model). 

Here's a brief overview of the component lifecycle phases in React:
1. **Initialization**: 
`constructor()`: This method is called when a component is initialized. It's used for initializing state and binding event handlers. 
- In React, when we say "binding event handlers," we are referring to the process of associating a function (the event handler) with a particular event on a DOM element.

```javascript
class MyComponent extends React.Component {
  handleClick() {
    console.log('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}
```

2. **Mounting**:
- `componentWillMount()`: ***Deprecated***. This method is called just before the component is mounted to the DOM.
- `render()`: This method is responsible for rendering the component's UI. It returns React elements.
- `componentDidMount()`: : This method is called after the component is mounted to the DOM. It's often used for performing tasks like fetching data from a server.

3. **Updating**:
- `componentWillReceiveProps()`: **Deprecated**. This method is called when the component is receiving new props. It's used to update state based on the new props.
- `shouldComponentUpdate()`: This method is called before rendering when new props or state are received. It allows you to control if the component should re-render or not.
- `componentWillUpdate()`: Deprecated. This method is called just before rendering when new props or state are received.
- `render()`: Same as in the mounting phase.
- `componentDidUpdate()`: This method is called after the component's updates are flushed to the DOM. It's often used for DOM manipulations or additional data fetching.

4. **Unmounting**:
- `componentWillUnmount()`: This method is called just before the component is removed from the DOM. It's used for cleanup tasks like removing event listeners or canceling timers.

5. **Error Handling** (optional):
- `componentDidCatch()`: This method is called when there's an error during rendering, in a lifecycle method, or in the constructor of any child component.

React 16.3 introduced some changes to the lifecycle methods and added some new methods like getDerivedStateFromProps() and getSnapshotBeforeUpdate(). Additionally, with the introduction of React Hooks, there's an alternative way to handle component lifecycle and state management using functional components.

### Components and props: 
- Components are the building blocks of a React application. They are like reusable pieces of code that represent different parts of a user interface.
- props allow data to be passed from a parent component to a child component.
- Example: Imagine a blog application where you have a Post component. You pass the post details (title, author, content) as props to the Post component from a parent component.
    
        const ProductComponent = (props) => {
        return (
            <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            </div>
        );
        };
    

### Children Props
- In React, the children prop is a special prop that can be passed to a component to render any content that is nested within the component's opening and closing tags.
- "children props" in React refer to the props that are passed from a parent component to its child component, enabling communication and data flow between them.


### Controlled component 
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

### Lifting State up 
"Lifting state up" in React refers to the process of moving the state from child components to their parent component. This is often done to share state between multiple components or to ensure that the state is managed in a single location, known as a "single source of truth."

```javascript
import React, { useState } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
};

const ChildComponent = ({ count, incrementCount }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ParentComponent;

```

- The `ParentComponent` manages the state count and provides the incrementCount callback function to update the count.
- The `ChildComponent` receives count as a prop and incrementCount as a callback function. When the button is clicked, incrementCount is called, updating the count in the parent component

### Synthetic Events
- SyntheticEvent is a wrapper based on the browser's native events.
- React Synthetic Events are very similar to Native Events, however, with Synthetic Events, the same API interface is implemented across multiple browsers.
- It's a wrapper object created by React that contains information about the event and additional methods to interact with it.

```javascript
import React from 'react';

class MyComponent extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked');
  };

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    );
  }
}

```

- In this example, `onClick` is a synthetic event provided by React. When the button is clicked, React creates a synthetic event object and passes it to the handleClick method. We can then interact with the synthetic event object just like we would with a native browser event, such as accessing event.target or calling methods like event.preventDefault().



### JSX (Javascript XML):
- JSX is a syntax extension for JavaScript recommended by React. It looks similar to XML or HTML, making it easier to write React components.

        const Header = () => {
        return (
            <header>
            <h1>My E-commerce Store</h1>
            </header>
        );
        };


### Event Handling:
- React components can handle user events like clicks and input changes.
- Example: In a to-do list application, you would use the onClick event to mark a to-do item as completed when a user clicks on it.

        const AddToCartButton = ({ onClick }) => {
        return (
            <button onClick={onClick}>
            Add to Cart
            </button>
        );
        };



### Conditional Rendering:
- Render different content based on certain conditions.
Example: In an e-commerce app, you might conditionally render a "Buy Now" button only if the product is in stock.

        const EcommerceStore = ({ productInStock }) => {
        return (
            <div>
            {productInStock && <p>Buy Now</p>}
            </div>
        );
        };




### Lists and Keys:
- Render lists of items efficiently using keys for optimization.
- Example: Displaying a list of comments on a blog post where each comment has a unique identifier (key) to help React efficiently update the list.


        const ProductList = ({ products }) => {
        return (
            <ul>
            {products.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
            </ul>
        );
        };


### Forms and Controlled Components:
- Manage form input state using React state.
- Example: Building a user registration form where the input values are controlled by React state, allowing you to validate and submit the form.



        const ControlledFormExample = () => {
        const [formData, setFormData] = useState({
            username: '',
            password: '',
        });

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
            // Perform form submission logic here
        };

        return (
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
        );
        };

        export default ControlledFormExample;


### React Hooks:
- React Hooks were introduced in React 16.8 that allows functional components to manage state, lifecycle, and other React features without needing to write a class component. They provide a more concise and readable way to handle stateful logic within functional components.

- example 1: `useState()` Allows functional components to manage local state.


        const CounterExample = () => {
        const [count, setCount] = useState(0);

        return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        );
        };


- example 2: `useEffect()` Performs side effects in functional components (e.g., data fetching, subscriptions).


        const DataFetchingExample = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            // Perform data fetching or side effects here
            fetchData().then((result) => setData(result));
        }, []); // Empty dependency array means this effect runs once after initial render

        return (
            <div>
            <ul>
                {data.map((item) => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            </div>
        );
        };

- example 3: `useContext()` Allows functional components to consume values from React context.


        const ThemeContext = React.createContext();

        const ThemedComponent = () => {
        const theme = useContext(ThemeContext);

        return <p>Current Theme: {theme}</p>;
        };


### Router and Navigation:
- Implement client-side navigation in a single-page application.
- Example: Using React Router to navigate between different views in a blog app, such as viewing a list of posts and viewing the details of a specific post.

        import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

        const Home = () => <h2>Home</h2>;
        const About = () => <h2>About</h2>;

        const NavigationExample = () => {
        return (
            <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </div>
            </Router>
        );
        };

        export default NavigationExample;



### Redux (State Management):
- Detailed Information : https://github.com/utkarsh-1602/redux-shopdecor-app/issues/3
- Example: Using Redux to manage the state of a shopping cart in an e-commerce app, ensuring consistency across different components.

    `store.js`

        import { createStore } from 'redux';

        // Reducer
        const counterReducer = (state = { count: 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
            return { count: state.count + 1 };
            case 'DECREMENT':
            return { count: state.count - 1 };
            default:
            return state;
        }
        };

        // Store
        const store = createStore(counterReducer);

        export default store;


    `CounterComponent.js`

        import React from 'react';
        import { useSelector, useDispatch } from 'react-redux';

        const CounterComponent = () => {
        const count = useSelector((state) => state.count);
        const dispatch = useDispatch();

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            </div>
        );
        };

        export default CounterComponent;



### High Order Components (HOC): 
- A High order component takes another component as input and returns a new component with additional functionalities.
- Example: An E-commerce platform where we are displaying product Information with `ProductDetails` Component. We are adding `loading` state, while the product data is being fetched. Then we are conditionally displaying a `save to Wishlist` button based on user authentication.

    `ProductDetails.js`

        import React, { useState, useEffect } from 'react';

        const withLoadingAndAuth = (WrappedComponent) => {
        return class extends React.Component {
            state = {
            isLoading: true,
            isAuthenticated: false, // Replace with actual authentication logic
            };

            componentDidMount() {
            // Simulate fetching product data
            setTimeout(() => {
                this.setState({ isLoading: false });
            }, 1000);

            // Check user authentication status
            this.setState({ isAuthenticated: true }); // Replace with actual check
            }

            render() {
            const { isLoading, isAuthenticated } = this.state;
            return (
                <div>
                {isLoading ? (
                    <div>Loading product details...</div>
                ) : (
                    <WrappedComponent
                    {...this.props}
                    isAuthenticated={isAuthenticated}
                    />
                )}
                </div>
            );
            }
        };
        };

    `EnhancedProductDetails.js`

        import ProductDetails from './ProductDetails';
        import withLoadingAndAuth from './withLoadingAndAuth';

        const EnhancedProductDetails = withLoadingAndAuth(ProductDetails);

        // Usage in another component:
        <EnhancedProductDetails productId={123} />



### Testing:
- In React, there are three main types of testing that ensure the quality and functionality of your application:

1. Unit Testing:

Focus: Individual components and functions in isolation.
Purpose: Verify that each component renders and behaves as expected with specific inputs and outputs.
Techniques: Use libraries like Jest and React Testing Library to mock dependencies and simulate user interactions.
Example: Testing if a button component correctly changes its text when clicked.


`TaskList.test.js`

        import React from 'react';
        import { render, fireEvent } from '@testing-library/react';
        import TaskList from './TaskList';

        test('renders tasks with titles and completion status', () => {
        const tasks = [
            { id: 1, title: 'Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true },
        ];
        const { getByText } = render(<TaskList tasks={tasks} />);

        expect(getByText('Task 1')).toBeInTheDocument();
        expect(getByText('Task 2')).toBeInTheDocument();
        expect(getByText('Incomplete')).toBeInTheDocument();
        expect(getByText('Completed')).toBeInTheDocument();
        });

        test('toggles task completion on click', () => {
        const tasks = [{ id: 1, title: 'Task 1', completed: false }];
        const { getByText } = render(<TaskList tasks={tasks} />);

        const taskCheckbox = getByText('Task 1').closest('label').querySelector('input');
        fireEvent.click(taskCheckbox);

        expect(tasks[0].completed).toBe(true); // Assuming tasks state is updated
        });



2. Component Testing:

Focus: Integration of components and their interaction with data and props.
Purpose: Ensure components work together seamlessly and produce the desired output based on data flow.
Techniques: Use libraries like Jest and React Testing Library to render components in a simulated environment and test their interactions.
Example: Testing if a TaskList component filters tasks correctly based on a selected status.

`TaskList.test.js` (continued)

        test('filters tasks by completion status', () => {
        const tasks = [
            { id: 1, title: 'Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true },
        ];
        const { getByText } = render(<TaskList tasks={tasks} />);

        const filterButton = getByText('Completed');
        fireEvent.click(filterButton);

        expect(getByText('Task 1')).not.toBeInTheDocument();
        expect(getByText('Task 2')).toBeInTheDocument();
        });


3. End-to-End (E2E) Testing:

Focus: User experience and overall application flow in a real browser environment.
Purpose: Simulate user interactions and verify that the entire application behaves as expected from the user's perspective.
Techniques: Use libraries like Cypress to automate user actions and test application behavior across different pages and scenarios.
Example: Testing if a user can add a new task, mark it complete, and see it reflected in the UI.


`TaskList.spec.js`

        describe('TaskList component', () => {
        it('allows marking tasks as complete', () => {
            cy.visit('/tasks');
            cy.contains('Task 1').should('not.have.class', 'completed');

            cy.contains('Task 1')
            .closest('label')
            .find('input')
            .click();

            cy.contains('Task 1').should('have.class', 'completed');
        });
        });
