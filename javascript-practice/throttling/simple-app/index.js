// create a button UI and add debounce 

const btn = document.querySelector('#submitButton')
const btnPressed = document.querySelector('.increment_pressed')
const btnCount = document.querySelector('.increment_count')

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime()

const throttleCount = _.throttle(() => {
    const now = new Date().getTime();
    console.log(now - start)
    btnCount.innerHTML = ++triggeredCount; 
}, 1000)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    throttleCount()
})
