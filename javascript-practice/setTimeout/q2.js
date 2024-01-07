/*
    Question : 
    You are given a function (fn), an array of arguments (args), and a timeout (t in milliseconds). Your task is to create a cancel function (cancelFn) that can be used to cancel the execution of fn after a certain delay (cancelTimeMs). The cancellation should occur if cancelFn is invoked before the original function (fn) is executed. Otherwise, if cancelFn is not invoked within the specified delay (t), the original function (fn) should be executed with the provided arguments (args).

    Explaination : 
    Imagine you have a task to do after a certain delay, but you want the option to cancel it if needed. This is like scheduling an action (the function fn with arguments args) to happen after a specific time (t). You also have the ability to cancel this scheduled action if you change your mind before it happens.

    The solution involves creating a function (cancellable) that sets up this scheduled action and returns a cancel function (cancelFn). If you decide to cancel before the scheduled time, the action is canceled. If you don't cancel in time, the action takes place.

    Input : 


 */

    function cancellable(fn, args, t) {
        let scheduled = false;
      
        const executeFn = () => {
          if (!scheduled) {
            scheduled = true;
            setTimeout(() => {
              console.log('Executing fn:', fn(...args));
            }, t);
          }
        };
      
        const cancelFn = () => {
          if (!scheduled) {
            scheduled = true;
            console.log('Cancellation scheduled before execution');
          } else {
            console.log('Cancellation invoked after execution was scheduled');
          }
        };
      
        executeFn();
      
        return cancelFn;
      }
      
      // Example usage:
      const fn1 = (x) => x * 5;
      const args1 = [2];
      const t1 = 20;

      const cancelTimeMs1 = 50;
      
      const cancelFn1 = cancellable(fn1, args1, t1);
      setTimeout(cancelFn1, cancelTimeMs1);
      
    //   const fn2 = (x) => x ** 2;
    //   const args2 = [2];
    //   const t2 = 100;
    //   const cancelTimeMs2 = 50;
    //   const cancelFn2 = cancellable(fn2, args2, t2);
    //   setTimeout(cancelFn2, cancelTimeMs2);
      
    //   const fn3 = (x1, x2) => x1 * x2;
    //   const args3 = [2, 4];
    //   const t3 = 30;
    //   const cancelTimeMs3 = 100;
    //   const cancelFn3 = cancellable(fn3, args3, t3);
    //   setTimeout(cancelFn3, cancelTimeMs3);
      