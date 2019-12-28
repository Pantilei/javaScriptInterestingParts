let url = "https://jsonplaceholder.typicode.com/users";
const headers = {
  "Content-Type": "application/json"
};

fetch(url, {
  method: "GET",
  headers
  //body: { mama: "mia" }
})
  .then(responce => {
    return responce.json();
  })
  .then(data => console.log(data));

let sendBody = { mama: "mia" };
fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify(sendBody)
})
  .then(responce => {
    return responce.json();
  })
  .then(data => console.log(data));
