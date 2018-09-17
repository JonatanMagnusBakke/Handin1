let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;  // simulates the result of the operation
        if (ok) {
          resolve(msg.toUpperCase());
        }
        else {
          reject("UPPPPs");
        }
      }, delay);
    });
  };


let promises = [promiseFactory("First", 3000), promiseFactory("second", 2000), promiseFactory("thrid", 1000)];
Promise.all(promises)
.then(d => {
    console.log(d);
})
  .catch(err=>console.log(err));