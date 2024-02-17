

const gameBoard = document.querySelector("#game");
const gridButton = document.querySelector("#container button");
const RGB_VALUES = 255;


let createColumn = function(){
    let gridColumn = document.createElement("div");
    let brightness = 100;
    gridColumn.classList.toggle("gridColumn");

    gridColumn.addEventListener("mouseenter", (e) => {
        if(e.target.style.backgroundColor === ""){
            e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        } else {
            brightness -= 10;
            e.target.style.filter = `brightness(${brightness}%)`;
        }
    });

    return gridColumn;
};


let createRow = function() {
    let gridRow = document.createElement("div");
    gridRow.classList.toggle("gridRow");
    return gridRow;
};


let createGrid = function(num = 16){
    for(let i =0; i < num; i++){
        let row = createRow();
        gameBoard.appendChild(row);
        for(let i =0; i < num; i++){
            row.appendChild(createColumn());
        }
    }
};


let removeGrid = function(){
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
};


window.addEventListener("load", createGrid());
gridButton.addEventListener("click", () => {
    gridDimension = +prompt("Enter number of Columns and Rows: ");
    
    while(gridDimension < 1 || gridDimension > 100){
        gridDimension = +prompt("Invalid! Please select a number between 1 and 100: ");
    }

    removeGrid();
    createGrid(gridDimension);
});

function randomColor() {
    return Math.floor(Math.random() * RGB_VALUES);
}



