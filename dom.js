function square(grid) {
  const body = document.querySelector("body");
  const div = document.querySelector(".container");
  div.style.display = "flex";
  div.style.width = "1000px";
  for (let i = 0; i < grid;i++) { 
    const square = document.createElement("div");
    square.style.display = "flex";
    square.style.width = "1000px";
    body.appendChild(square);
    for (let j = 0;j < grid; j++){
      const box = document.createElement("div");
      square.appendChild(box);
      box.textContent = `${j}`;
      box.style.height = "56px";
      box.style.width = "56px";
      box.style.border = "2px solid black";
      box.addEventListener("mouseenter", function(e) {
        box.style.backgroundColor = "red";
      })
      box.addEventListener("mouseleave", function(e) {
        box.style.backgroundColor = "white";
      })
  }
  }
}
let grid = 16;
square(grid);
const button = document.querySelector("button");
button.style.fontWeight = "600";
button.style.width = "80px";
button.addEventListener("click",function() {
  grid = prompt();
  square(grid);
})
