const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", defineGrid);

function random255() {
    return Math.ceil(Math.random() * 255);
}

function defineGrid() {
    container.innerHTML = '';
    let grid_size = 10;
    while (true) {
        grid_size = parseInt(prompt("Enter a grid size, eg. 64 for (64x64) grid."));
        if (grid_size > 100 || grid_size < 1) {
            alert("Invalid Grid size, It should be between 1 and 100");
        }
        else {
            break;
        }
    }
    let div_side = 600 / grid_size;

    for (let i = 0; i < grid_size ** 2; i++) {
        let new_div = document.createElement("div");
        new_div.style.boxSizing = "border-box";
        new_div.style.border = "2px solid black";
        new_div.style.width = `${div_side}px`;
        new_div.style.height = `${div_side}px`;
        new_div.className = "divs";
        new_div.style.opacity = 0.1;
        container.appendChild(new_div);
        new_div.addEventListener("mouseover", function (e) {

            e.target.style.backgroundColor = `rgb(${random255()},${random255()},${random255()})`;
            e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
        });

    }
}

