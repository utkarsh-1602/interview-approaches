# Local Storage and Session storage 

- localStorage and sessionStorage are both features of HTML5 Web Storage.
- Both localStorage and sessionStorage typically have larger storage limits compared to cookies. However, the exact limit varies between browsers and is generally around 5-10 MB per domain.

## Local Storage 

- Data stored in localStorage exists even after the browser is closed and reopened. It has no expiration time and remains stored until removed by the web application or user.
- localStorage is often used for storing the data that needs to be accessed across multiple sessions or pages within the same domain. This could include settings, or cached data.


## Session Storage
- Data stored in sessionStorage is available only for the duration of the page session. 
- data is cleared when the browser tab is closed or when the session ends.


Here's a simple example demonstrating the usage of **localStorage** and **sessionStorage**: 

```javascript
// Storing data in localStorage
localStorage.setItem('user', JSON.stringify({ id: 1, name: 'John' }));

// Retrieving data from localStorage
const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
console.log(userFromLocalStorage);

// Storing data in sessionStorage
sessionStorage.setItem('token', 'abcd1234');

// Retrieving data from sessionStorage
const tokenFromSessionStorage = sessionStorage.getItem('token');
console.log(tokenFromSessionStorage);

```