/* //Object.create, getters, setters

const person = Object.create(
  {
    getAge: function() {
      return new Date().getFullYear() - this.birthYear;
    }
  },
  {
    name: {
      value: "Pantilei",
      enumerable: true,
      writable: true,
      configurable: true
    },
    job: {
      value: "Engineer",
      enumerable: true, // if true in 'for in' loop we can iterate
      writable: false, // if false object value cannot be changed
      configurable: false // if false object property cannot be deleted
    },
    birthYear: {
      value: 1992,
      enumerable: false
    },
    age: {
      get() {
        console.log(new Date().getFullYear());
        return new Date().getFullYear() - this.birthYear;
      },
      set(color) {
        document.body.style.backgroundColor = color;
      }
    }
  }
);

for (let p in person) {
  if (person.hasOwnProperty(p)) {
    console.log(p, person[p]);
  }
}
// Creating getter and setter using just object
let obj = {
  mama: "Katya",
  papa: "Ivan",
  brother: "Petr, Ivan",
  get family() {
    return console.log(this.mama, " ", this.papa, " ", this.brother);
  },
  set family(names) {
    [this.mama, this.papa] = names.split(" ");
  }
};
 */
