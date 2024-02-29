# Lazy Loading 
- Lazy loading is not a new concept. It has been available for quite some time. In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.

- In situations where we know that certain code/features will not be accessible to all the users or the user does not access it frequently, it is best to load them when the user requests for it. This improves user experience as well as initial loading time.

- **For example**, let's consider that our application has two sections, A and B. Size of A is 1 MB and its loading time is approximately 1 second. Size of B is also 1 MB and so its loading time is also 1 second. And we know that a user will access either of the sections, or a user accessing section A will rarely access section B and vice versa. If we were to load the complete application at the starting of our application, it would cost the user 2 MB of data and the loading time will also be 2 seconds. The user might not like to wait for 2 seconds or won't be happy that a site is costing them a lot of data. This can be improved and halved with proper lazy loading.


## React Suspense 
- From React 16.6+, react added React Suspense which performs lazy loading.
- **React Suspense** is a feature in React.js that allows components to suspend rendering while they wait for some asynchronous operation to complete, such as fetching data from an API or loading a component dynamically.
-  It's particularly useful for improving the user experience by providing better feedback during loading states and reducing the need for loading spinners or placeholders.
- Before Suspense, handling asynchronous operations in React involved using callbacks, promises, or libraries like Redux for managing state. While these methods work, they can lead to complex code and nested callback hell.
- With Suspense, React provides a more declarative way to handle asynchronous operations. You can use the Suspense component to wrap components that may have asynchronous dependencies. When React encounters a Suspense boundary, it pauses rendering of the component tree within it and displays a fallback UI until the suspended component or components have finished loading.
- **A fallback UI**, in the context of React Suspense, refers to a user interface that is displayed while waiting for asynchronous operations to complete. When a React component wrapped in a Suspense boundary suspends its rendering, meaning it's waiting for some data to load asynchronously, React will display the fallback UI instead of the component's regular content
- React Suspense works in conjunction with the new useTransition hook, which allows components to transition smoothly between states, such as loading and loaded, without blocking the UI.


