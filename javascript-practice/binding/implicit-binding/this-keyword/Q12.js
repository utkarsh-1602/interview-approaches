const obj = {
    name: 'deeecode',
    age: 200,
    print: function() {
      function print2() {
        console.log(this)
      }
      
      print2()
    }
  }
  
  obj.print()
  
//   it prints the global object