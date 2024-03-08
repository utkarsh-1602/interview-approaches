setTimeout(() => console.log("INTERRUPT"), 10);

async function logNumbers() {
  for (let i = 0; i < 1_000_000; i++) {
    await (async () => console.log(i))();
  }
}

logNumbers();
