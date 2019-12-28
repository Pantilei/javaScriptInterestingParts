/* function* gen(n = 10) {
  for (let i = 1; i < n; i++) {
    yield i;
  }
}

let num = gen(5);
 */

/* let iterator = {
  gen(n=10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          i++;
          return { value: i, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};
let num = gen(5); */

//if we define in object [Symbol.iterator] method we can iterate trough this object using "for of"
/* let iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          i++;
          return { value: i, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (let n of iterator) {
  console.log(n);
} */
//Using Generators in 'for of' loop
/* function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let p of iter(4)) {
  console.log(p);
} */
