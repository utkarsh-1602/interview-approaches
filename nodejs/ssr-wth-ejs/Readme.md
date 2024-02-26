# SSR with EJS

- EJS" stands for "Embedded JavaScript"
- EJS is a popular templating engine that enables you to generate HTML markup with plain JavaScript.
-  It allows you to embed JavaScript code directly into your HTML templates, making it easier to dynamically generate HTML content based on data from your Node.js application.
- EJS is often used in Node.js web applications alongside frameworks like Express.js to dynamically generate HTML pages based on data fetched from a database or provided by the server. It provides a simple and flexible way to build dynamic web pages with Node.js.

## `res.render()`
- The `res.render()` function in Express is used to render a view and sends the rendered HTML string to the client. 

```javascript
res.render(view [, locals] [, callback])
```

- Parameters: This function accepts two parameters as mentioned above and described below:  

1. **Locals**: It is an object whose properties define local variables for the view.
2. **Callback** It is a callback function