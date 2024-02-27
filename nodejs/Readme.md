# Important Resources 

### To generate test Json Data for API Testing 
- Mockaroo : https://www.mockaroo.com/

### To verify our encoded JWT Token 
- JWT.io : https://jwt.io/


# Node js

## What is Nodejs ? 
- Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

- Node.js enables developers to use JavaScript for both client-side and server-side programming, which means that they can write JavaScript code for backend server logic as well as frontend web development.

## What is a runtime environment ?
- A runtime environment is where your program will be executed. It determines what global objects your program can access and it can also impact how it runs.
- the Node runtime environment was created for the purpose of executing JavaScript code without a browser, thus enabling programmers to create full-stack (front-end and back-end) applications using only the JavaScript language.

## What is Difference between `req.params` and `req.query` ? 

### req.params
- `req.params` is used to access route parameters from the URL. For example if we have a dynamic route (id) then `req.params` will be used to access the value of that dynamic (id).
- Route parameters are parts of the URL path that are dynamic.
- These parameters are typically used to identify and access specific entities in the application.

### req.query
- `req.query` is used to access query parameters from the URL. For example if we have a query string with **key-value** pair in our url after the `?` mark. then we can access the value of query using `req.query`.
- Query string parameters provide a way to pass data to the server as part of the URL.
- They are often used for specifying optional parameters, filtering criteria, or pagination information in requests.
- Query string parameters are not part of the URL path and are appended to the URL after a question mark `?`, followed by **key-value pairs** separated by ampersands **&**.

### Here's a simple comparison:
`URL: /users/123?name=John`

- `req.params.userId` would give you '123'. 
- `req.query.name` would give you 'John'.


