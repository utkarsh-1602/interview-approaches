# Events in JavaScript

## What is the difference between the document `load` event and the document `DOMContentLoaded` event in JavaScript?

The `load` event and the `DOMContentLoaded` event are both events that are fired by the browser during the lifecycle of a web page, but they occur at different times and serve different purposes.

1. `DOMContentLoaded` event fires when the initial HTML document has been completely loaded and parsed (without waiting for images, and stylesheets, scripts to finish loading).

2. `load` event is fired when the entire web page, including all external resources such as images, stylesheets, and scripts, has finished loading.

