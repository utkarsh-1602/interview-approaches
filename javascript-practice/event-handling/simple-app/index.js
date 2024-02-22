// create a button UI and add debounce 

const btn = document.querySelector('#submitButton')
const outerdiv = document.querySelector('.input-container')
const innerdiv = document.querySelector('.button-container')

outerdiv.addEventListener('click', () => {
    console.log('Outer Div clicked (capturing phase)')
})

innerdiv.addEventListener('click', () => {
    console.log('Inner Div clicked (bubbling phase)')
})

