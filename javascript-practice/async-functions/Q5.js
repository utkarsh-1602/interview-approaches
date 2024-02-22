console.log('start')

function getUsername(username){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username)
        }, 2000)
    })

}

const result = async() => {
    const response = await getUsername("utkarshcoder");
    console.log(response)
}

result()

console.log('stop')
