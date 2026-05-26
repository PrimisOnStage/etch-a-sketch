const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", defineGrid);

function defineGrid(){

    let grid_size = parseInt(prompt("Enter a grid size, eg. 64 for (64x64) grid."));
    let div_side = 600/grid_size;
    for (let i = 0; i < grid_size**2; i++) {
        let new_div = document.createElement("div");
        new_div.style.boxSizing = "border-box";
        new_div.style.border = "2px solid black";
        new_div.style.width = `${div_side}px`;
        new_div.style.height = `${div_side}px`;
        container.appendChild(new_div);
    }
    
}


