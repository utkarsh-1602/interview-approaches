# REST API 

## What's Difference between req.query and req.params ? 
- Use `req.query` to access query parameters from the URL.
- Use `req.params` to access route parameters from the URL.

Here's a simple comparison:
`URL: /users/123?name=John`

- `req.params.userId` would give you '123'.
- `req.query.name` would give you 'John'.




