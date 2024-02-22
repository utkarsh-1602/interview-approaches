# Event Propogation, Event Bubbling, Event Delegation, Event Capturing 

The topics you mentioned - bubbling, capturing, delegation, and propagation - are part of the broader concept of event handling in JavaScript.

## Bubbling and Capturing
- These are two phases of event propagation in the DOM (Document Object Model). When an event occurs on a DOM element, it doesn't just stay there; it "bubbles" up through its ancestors until it reaches the root of the document. This is called event bubbling. 
- Capturing is the opposite; the event starts at the root of the document and trickles down to the target element.


## Event Delegation
This is a pattern in JavaScript where instead of attaching event handlers to individual elements, you attach a single event handler to a parent element that will fire for all descendants matching a selector. This is particularly useful when you have a large number of elements to which you want to attach the same event handler, or when dealing with dynamically added elements.

