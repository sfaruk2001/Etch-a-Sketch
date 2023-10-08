const container = document.querySelector(".container");
const gridButton = document.querySelector(".nav");
const body = document.querySelector("body");

gridButton.addEventListener("click", function() {
    let size = prompt("What size do you want the grid to be?",16);
    
    
    createGrid(size);
});


function createGrid(size) {
    if (size > 100) {
        size = 100;
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.style.height = "30px";
            square.style.width = "30px";
            square.style.border = "black 1px solid";
            square.classList.add("cell");
            square.addEventListener('mouseover', colorCell);
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

function colorCell(e) {
    const cell = e.target;
    cell.style.backgroundColor = "black";
}

createGrid(16);