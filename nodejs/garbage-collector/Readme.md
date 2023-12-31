# Garbage Collector in Nodejs 

- Garbage Collection periodically purges unused memory by removing objects that are no longer required from the heap. The GC process in Node. js is a combination of two algorithms: the Scavenger (Minor GC) and the Mark-Sweep & Mark-Compact (Major GC).

- In Node.js, you might not see explicit messages related to garbage collection by default. However, you can enable garbage collection logs using the `--trace_gc` flag.

Make sure your Node.js version supports garbage collection logging. You may need to use a version with the --expose-gc flag. 
For example:
```bash
Copy code
node --expose-gc your-app.js
