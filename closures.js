//Closures are functions inside another functions;
//It is used to access scopes inside the functions from outside scope

/* function UrlGenerator(domen) {
  return function(url) {
    return console.log(`https://${url}.${domen}`);
  };
}
let ruUrl = UrlGenerator("ru");
let comUrl = UrlGenerator("com");
ruUrl("vk");
comUrl("google");
//
function bind(context, fun) {
  return function(...args) {
    console.log("args: ", args);
    fun.apply(context, args);
  };
}

let person = { age: 25, name: "Ivan" };
function fn() {
  console.log(this);
  console.log(this.name, " is ", this.age, " years old.");
}

bind(person, fn)();
 */
