//Classes

/* class Animal {
  static tell() {
    console.log("I am static method!!!");
  }

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.legs = options.legs;
    this.fn = () => console.log("I am object method.");
  }

  voice() {
    console.log("Animal shouts!!!");
  }
}

let cat = new Animal({ name: "Santa", age: "34", legs: 4 });

class Cow extends Animal {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  get ageNew() {
    return this.age * 10;
  }
  set ageNew(newAge) {
    this.age = newAge;
  }
}

let myCow = new Cow({ name: "Galya", age: "34", legs: 4, color: "blue" }); */

//Practical Application of Classes
/* class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  show() {
    this.$el.style.display = "block";
  }

  hide() {
    this.$el.style.display = "none";
  }
}

class Square extends Component {
  constructor(params) {
    super(params.selector);
    this.$el.style.width = params.width;
    this.$el.style.height = params.height;
    this.$el.style.backgroundColor = params.color;
  }
  squareHide() {
    super.hide();
  }
}

class Circle extends Square {
  constructor(params) {
    super(params);
    this.$el.style.borderRadius = "50%";
  }
}

let sqr = new Square({
  selector: "#square1",
  width: "100px",
  height: "60px",
  color: "green"
});

let cir = new Circle({
  selector: "#circle1",
  width: "30px",
  height: "30px",
  color: "blue"
}); */
