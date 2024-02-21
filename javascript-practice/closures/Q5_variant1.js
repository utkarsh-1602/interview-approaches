
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, i*1000)
}

/*
    With var, i is function-scoped, not block-scoped. This means that there is only one i variable throughout the loop, and its value changes during each iteration.
    The setTimeout functions capture the reference to the same i variable.
    By the time the setTimeout functions run (after the loop has finished executing), i has a final value of 3.

    So, all three calls to setTimeout are made almost immediately, with delays scheduled for 0, 1000, and 2000 milliseconds respectively. The loop does not wait for the timeouts to complete; it continues executing until i is no longer less than 3. Therefore, the loop finishes executing before any of the timeouts are fired, and when the timeouts do fire, they all use the final value of i, which is 3. Hence, you see 3 printed three times after 0, 1, and 2 seconds respectively.

*/