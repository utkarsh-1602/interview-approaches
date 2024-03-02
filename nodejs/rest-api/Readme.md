# REST API 
- REST Stands for (Representational State transfer) and it is a software architectural style used for design and development of API's

## What's Difference between req.query and req.params ? 
- Use `req.query` to access query parameters from the URL.
- Use `req.params` to access route parameters from the URL.

Here's a simple comparison:
`URL: /users/123?name=John`

- `req.params.userId` would give you '123'.
- `req.query.name` would give you 'John'.




