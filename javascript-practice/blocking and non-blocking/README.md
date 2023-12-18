# Blocking vs Non-Blocking in NodeJS
Node.js is designed to be non-blocking. In a non-blocking paradigm, operations don't wait for completion; they proceed to the next operation. This is achieved through asynchronous functions and callbacks.

> for example: 
- Here I created a simple example, the first route uses an async function and it takes 10 sec before sending a response and the second route sends a response immediately.When I sent a request to the first route and while waiting for a response I sent another request to the second route and I got a response even though the first route didn't finish executing the code yet. Why is it non-blocking on this example?

```
function sleep(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },10000)
  }).then(val=>val)
}


router.get('/route1',async (req,res)=>{
  const test = await sleep() 
  res.send('HELLO WORLD')
})

router.get('/route2',(req,res)=>{
  res.send("HELLO WORLD")
})

```

Answer : 
- await only `blocks/suspends` execution of the current function, not the whole interpreter. In fact, at the point a function hits the first await inside the function, the function immediately returns a promise and other processing after that function (or other events that occur) are free to run.

So, in the example, when it hits the `await sleep()`, that function execution is suspended until the await `resolves/rejects` and the containing `async` function immediately returns an unfulfilled promise. Since Express with `router.get()` is not doing anything with that returned promise, it just ignores it and returns control back to the event loop. Sometime later, your second request arrives at the server, an event gets put into the nodejs event queue and Express gets called with that event and it serves your second route handler.

