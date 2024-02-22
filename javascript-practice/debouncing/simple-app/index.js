// create a button UI and add debounce 

const btn = document.querySelector('#submitButton')
const btnPressed = document.querySelector('.increment_pressed')
const btnCount = document.querySelector('.increment_count')

var pressedCount = 0;
var triggeredCount = 0;

const debounceCount = _.debounce(() => {
    btnCount.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    debounceCount()
})
