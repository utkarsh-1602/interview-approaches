const obj = {
    name: 'deeecode',
    age: 200,
    print: () => {
      console.log(this)
    }
  }
  
  obj.print()
  // As you see in the result, this was pointing to the Window object before print was created.