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


## urlencoded() data
- In Node.js with Express, `app.use(express.urlencoded({ extended: false }))` is middleware that is used to parse incoming request bodies encoded as URL-encoded data. URL-encoded data is commonly used when submitting form data from HTML forms.
- When extended is set to false, the urlencoded middleware will only parse simple URL-encoded bodies. This means it will only parse key-value pairs where the value can be a string or array. This is the default behavior.
- If you set extended to true, the middleware will parse URL-encoded bodies with rich objects and arrays. This allows for a more flexible parsing of the request body. However, using extended: true is discouraged because it can lead to security vulnerabilities known as "parameter pollution" where an attacker can manipulate the request body to override parameters or inject malicious data