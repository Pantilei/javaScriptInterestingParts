// Promises

/* let delay = ms => {
  console.log("Receiving data from server...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms / 1000);
    }, ms);
  });
};
delay(2000)
  .then(s => {
    console.log("Seconds:", s);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("I am in second then");
        resolve({ mak: 34, data: "shh", s });
      }, 2000);
    });
  })
  .then(obj => console.log(obj.data, "seconds:", obj.s))
  .catch(err => console.log("Error: ", err))
  .finally(() => console.log("Do this in any case."));

Promise.all([delay(1000), delay(5000)]).then(ms => console.log(ms));
 */
