# Important concepts of Reactjs

# React JS Folder Structure
Refer: https://blog.webdevsimplified.com/2022-07/react-folder-structure/

## What is Reactjs ? 
- React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
- ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.

## Important Concepts of Reactjs you should know as a frontend Developer 
> (Every Concept Consists of Real world Scenario usecase of it)


**Components and props**: 
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
    

**JSX (Javascript XML)**:
- JSX is a syntax extension for JavaScript recommended by React. It looks similar to XML or HTML, making it easier to write React components.

        const Header = () => {
        return (
            <header>
            <h1>My E-commerce Store</h1>
            </header>
        );
        };


**Event Handling**:
- React components can handle user events like clicks and input changes.
- Example: In a to-do list application, you would use the onClick event to mark a to-do item as completed when a user clicks on it.

        const AddToCartButton = ({ onClick }) => {
        return (
            <button onClick={onClick}>
            Add to Cart
            </button>
        );
        };



**Conditional Rendering**:
- Render different content based on certain conditions.
Example: In an e-commerce app, you might conditionally render a "Buy Now" button only if the product is in stock.

        const EcommerceStore = ({ productInStock }) => {
        return (
            <div>
            {productInStock && <p>Buy Now</p>}
            </div>
        );
        };




**Lists and Keys**:
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


**Forms and Controlled Components**:
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


**React Hooks**:
- Hooks provide a more concise and readable way to handle state, side effects, and other React features.

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


**Router and Navigation**:
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



**Redux (State Management)**:
- Redux is a predictable state container for JavaScript applications, commonly used with React to manage the state of an application in a more organized and centralized manner. It follows the principles of Flux architecture and provides a unidirectional data flow.
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



**High Order Components (HOC)**: 
- Reuse component logic by wrapping components.
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



**Testing**:
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
