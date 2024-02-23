# useRef() hook 

- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
- The useRef Hook allows you to persist values between renders.
- When we say that the useRef Hook allows you to persist values between renders, it means that you can store a value using useRef, and that value will remain the same across renders of the component.
- It can be used to access a DOM element directly


```javascript
const ref = useRef(initialValue)
```

- `useRef` returns an object with a single property `current`. Initially, it’s set to the `initialValue` you have passed. You can later set it to something else.
- When you change the `ref.current` property, React does not re-render your component. React is not aware of when you change it because a `ref` is a plain JavaScript object.

## What is difference between `useRef` and `useState` ? 

**Rendering Updates**:
- If you need to update state in a way that triggers re-renders and you want those updates reflected in the UI, useState is the appropriate choice.
- If you need to store a value that doesn't affect rendering or you want to maintain a value without causing re-renders, useRef is suitable.

**Component Re-renders:**
- useState will cause the component to re-render when the state is updated, which may be necessary if the state change should be reflected in the UI.
- useRef allows you to update values without triggering re-renders, which can be useful for performance optimization or for storing values that don't affect the UI.

**Functional Updates**:
- useState provides a way to update state based on the previous state, which is useful for scenarios where the new state depends on the old state.
- useRef doesn't provide a built-in mechanism for functional updates. It's typically used for storing mutable values and accessing them across renders.