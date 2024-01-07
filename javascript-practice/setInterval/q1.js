// if you want to display some callback function every interval of time, you can do it by using setInterval

const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  console.log(a);
  console.log(b);
}

console.log(intervalID)