const whole = document.querySelector("body");
const div = document.querySelector(".container");
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.width = "960px"
whole.appendChild(div);
let grid = 16;
for (let i = 0; i < grid;i++) { 
  for ( let j = 0;j < grid;j++) {
    const box = document.createElement("div");
    div.appendChild(box);
    box.textContent = `${j}`;
    box.style.height = "56px";
    box.style.width = "56px";
    box.style.border = "2px solid black";
  }
}
