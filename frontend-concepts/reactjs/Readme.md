# Reactjs 

## What is Reactjs ? 
- React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
- ReactJS's primary goal is to create User Interfaces (UI) which enhance the speed of programs. It makes use of virtual DOM (JavaScript object), which enhances the app's efficiency. Quicker than the standard DOM is the JavaScript virtual DOM.

## Important Concepts of Reactjs you should know as a frontend Developer 
> (Every Concept Consists of Real world Scenario usecase of it)

**Components and props**: 
- Components are the building blocks of a React application. They encapsulate the UI and functionality.
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
    

**State and Lifecycle**:
- State is used to manage data within a component.
- Lifecycle methods allow you to perform actions at different stages of a component's existence.
- Example: In a real-time chat application, you might use state to manage the list of messages. The componentDidMount lifecycle method could be used to fetch initial messages when the component mounts.


        class ShoppingCart extends Component {
        constructor(props) {
            super(props);
            this.state = {
            items: [],
            };
        }

        componentDidMount() {
            // Fetch shopping cart items from an API
            // Update state with fetched items
        }

        render() {
            return (
            <div>
                <h2>Your Shopping Cart</h2>
                {/* Display shopping cart items */}
            </div>
            );
        }
        }


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

        const DiscountBanner = ({ showBanner }) => {
        return (
            <div>
            {showBanner && <p>Special discount: 10% off on selected items!</p>}
            </div>
        );
        };
        // This is a conditional rendering statement. If showBanner is true, it will render the <p> element with the discount message. If showBanner is false, nothing will be rendered.




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




