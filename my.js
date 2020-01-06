let elementContainer = document.createElement("div");

elementContainer.setAttribute(
  "style",
  "display: block; margin: 0 auto; background: green; width: 700px; height: 400px"
);
elementContainer.style.position = "relative";

document.getElementById("myContainer").appendChild(elementContainer);

class Rectangle {
  constructor() {
    this.$el = document.createElement("div");
  }

  createRec(width, height, color) {
    this.$el.setAttribute(
      "style",
      `position: absolute; width: ${width}px; height: ${height}px; background-color: ${color}; right: 100px; top: 200px;`
    );
    return this.$el;
  }
}

class Square extends Rectangle {
  constructor() {
    super();
  }

  createSquare(side, color) {
    this.$el.setAttribute(
      "style",
      `position: absolute; width: ${side}px; height: ${side}px; background-color: ${color}; right: 300px; top: 200px;`
    );
    this.$el.setAttribute("id", "mySquare");
  }
}

let btn = document.createElement("button");
btn.innerHTML = "Create Rectangle";
let btn2 = document.createElement("button");
btn2.innerHTML = "Create Square";

let inputField = document.createElement("input");
inputField.setAttribute("type", "text");
inputField.setAttribute("id", "inputSide");

elementContainer.appendChild(btn);
elementContainer.appendChild(btn2);
elementContainer.appendChild(inputField);

let rec = new Rectangle();
btn.addEventListener("click", function(event) {
  console.log(rec);
  rec.createRec(40, 50, "blue");
  elementContainer.appendChild(rec.$el);
});

let sqr = new Square();
btn2.addEventListener("click", function(event) {
  console.log(event);
  let val = document.getElementById("inputSide");
  console.log(val.value);
  sqr.createSquare(parseInt(val.value), "red");
  elementContainer.appendChild(sqr.$el);
});

elementContainer.addEventListener("mousemove", function(event) {
  if (document.querySelector("#mySquare")) {
    let posX = event.clientX - (innerWidth - 700) / 2;
    let posY = event.clientY;
    if (posX > 0 && posX < 700 && posY < 400) {
      sqr.$el.style.left = `${posX}px`;
      sqr.$el.style.top = `${posY}px`;
    }
    //console.log();
  }
});
