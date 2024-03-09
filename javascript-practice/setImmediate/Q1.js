console.log('Start');

setImmediate(() => {
  console.log('Inside setImmediate callback');
});

console.log('End');
