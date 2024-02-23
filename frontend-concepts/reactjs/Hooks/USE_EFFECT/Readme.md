# useEffect() hook 

- the useEffect() hook in React is a function that allows you to perform side effects in functional components. Side effects can include data fetching, setting up subscriptions, or manually changing the DOM.
- You use useEffect() to tell React that your component needs to do something after it renders. It runs after every render, by default, but you can also control when it runs by passing a dependency array.

## cleanup function 
- In React, a cleanup function refers to a function that is used to perform cleanup or teardown tasks when a component is unmounted or when certain conditions change. Cleanup functions are commonly associated with effects in functional components, particularly when using the `useEffect` hook.
- When you use useEffect to perform side effects in a functional component, you may need to clean up those side effects to prevent memory leaks or to ensure that resources are properly released when the component is removed from the DOM. This is where cleanup functions come into play.

```javascript
useEffect(() => {

// this is a cleanup function
  return () => {
  }
  
}, [])

```


## Usecase of useEffect() with a scenario in a MERN stack Project

## Scenario 1
- Let's imagine a scenario where you're building a MERN (MongoDB, Express.js, React, Node.js) stack project, specifically a **simple task management application**.
- In this project, you have a frontend React component called TaskList that fetches tasks from a backend Express.js server and displays them. You want to fetch the tasks from the server **when the component mounts**, so you use the `useEffect()` hook.
- The empty dependency array ([]) ensures that the effect runs only once after the component mounts.


        const [tasks, setTasks] = useState([]);

        useEffect(() => {
            const fetchTasks = async () => {
            try {
                const response = await fetch('/api/tasks');
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
            };

            fetchTasks();
        }, []); // Runs once on component mount


    
    ### **What happens if you don't use useEffect() in a simple Task Management Application**:

    If you don't use `useEffect()` for fetching tasks in your task management application, the code to fetch tasks will be executed every time the component re-renders. This can lead to unnecessary API calls and performance issues. Additionally, you might encounter infinite loops if the state update inside the component triggers a re-render, leading to repeated API calls.


## Scenario 2 
- Suppose you're building a real-time chat application using the MERN stack. In this scenario, you want to establish a WebSocket connection when the chat component mounts to receive real-time messages from other users.


        const socket = io.connect('http://localhost:5000');

        useEffect(() => {

            // Establish WebSocket connection when component mounts
            socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
            });

            // Clean up WebSocket connection when component unmounts
            return () => {
            socket.disconnect();
            };

        }, []); // Runs once on component mount



    ### What happens if you don't use useEffect():
    If you don't use useEffect() to establish the WebSocket connection in the chat component, the code to establish the connection will be executed every time the component re-renders. This could result in multiple WebSocket connections being established, leading to unexpected behavior and performance issues. Additionally, not cleaning up the connection could result in memory leaks over time.

