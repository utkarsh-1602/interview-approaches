# Debouncing 
refer: https://www.youtube.com/watch?v=kCfTEoeQvQw&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=11

- Debouncing is a technique where the function is only executed after a specific delay since the last event's occurrence.
- typically it is used for events such as scrolling, resizing, or typing.
- When you attach an event listener to such an event, the listener function may be called multiple times rapidly, especially if the event is triggered frequently. Debouncing helps in optimizing performance and preventing unnecessary executions of the attached function.


### addEventListener()
- The addEventListener method in JavaScript is used to attach an event handler function to a specified element.
- In addEventListener() we pass event type, function to be executed when the event is triggered as arguments.

**Syntax**:
```javascript
element.addEventListener(event, function, useCapture);
```

### Implement debounce() from lodash

- for lodash cdn: https://cdnjs.com/libraries/lodash.js
- refer: https://lodash.com/docs/4.17.15#debounce
