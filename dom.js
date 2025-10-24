const body = document.querySelector("body");
const div = document.querySelector(".container");
div.style.display = "flex";
div.style.width = "1000px";
const button = document.querySelector("button");
button.style.fontWeight = "600";
button.style.width = "80px";
function box(grid) {
  for (let i = 0; i < grid;i++) { 
    const square = document.createElement("div");
    square.style.display = "flex";
    square.style.width = "1000px";
    body.appendChild(square);
    for (let j = 0;j < grid; j++){
      const box = document.createElement("div");
      square.appendChild(box);
      box.style.height = "56px";
      box.style.flex = "1";
      box.style.width = "56px";
      box.style.border = "2px solid black";
      box.addEventListener("mouseenter", function(e) {
        box.style.backgroundColor = "red";
      })
      box.addEventListener("mouseleave", function(e) {
        box.style.backgroundColor = "white";
      })
    }
      button.addEventListener("click",function() {
          body.removeChild(square);
      });
    }
}
box(16);
let grid = 0;
button.addEventListener("click",function() {
  grid = prompt("Maximum Limit Is 100" );
  if (grid <= 100) {
    box(grid);
  }
});  
