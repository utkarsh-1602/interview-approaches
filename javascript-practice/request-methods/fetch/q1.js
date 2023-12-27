
// fetch data from some API endpoint
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response is okay
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // parse the result as JSON
    return response.json();
  })
  .then(data => {
    // handle the JSON data here
    console.log(data);
  })
  .catch(error => {
    // handle any errors here
    console.error('There has been a problem with your fetch operation:', error);
  });


//   How would you send a POST request using the Fetch API?  
// by using the Fetch API's fetch function with the URL, and an options object specifying method: 'POST' and body: JSON.stringify(data), where data is your payload
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));



// fetch api with async await 
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchData();
  
  
