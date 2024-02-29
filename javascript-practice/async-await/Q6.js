console.log('start')

function getUsername(username){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(username)
        }, 2000)
    })

}

const result = async() => {
    try {
        const response = await getUsername("utkarshcoder");
        console.log(response)
    } catch (error) {
        console.error("Error occurred:", error); // Logging the error message
    }
}

result()

console.log('stop')
