# Throttling
- Throttling in JavaScript is another technique used to control how often a function is executed in response to an event, similar to debouncing. However, the key difference lies in how throttling limits the rate at which a function can be executed, rather than delaying the execution of the function like debouncing.
- In summary, throttling ensures that the function attached to the event is executed at a controlled rate, with a minimum interval between consecutive executions.
- Throttling is commonly used in scenarios like scroll events (for lazy loading), mousemove events (for tracking mouse position), or any situation where you want to ensure that a function is not executed too frequently, even if the event is triggered rapidly.

