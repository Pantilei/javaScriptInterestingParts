/* let delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

let url = "https://jsonplaceholder.typicode.com/todos";
/////
function fetchToDo() {
  console.log("Fetching JsonPlaceholder...");
  return delay(2000)
    .then(() => {
      return fetch(url);
    })
    .then(result => result.json());
}
fetchToDo()
  .then(result => console.log(result))
  .catch(e => console.log(e));
/////
async function fetchToDo() {
  try {
    console.log("Fetching JsonPlaceholder...");
    await delay(2000);
    const responce = await fetch(url);
    const result = await responce.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Everything went perfect!!!");
  }
}

fetchToDo();
 */
