

const gameBoard = document.querySelector("#game");
const gridButton = document.querySelector("#container button");


let createColumn = function(){
    let gridColumn = document.createElement("div");
    gridColumn.classList.toggle("gridColumn");

    gridColumn.addEventListener("mouseenter", (e) => {
        e.target.classList.toggle("squareColor");
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
    let gridDimension = 16;
    gridDimension = +prompt("Enter number of Columns and Rows: ");
    
    while(gridDimension < 1 || gridDimension > 100){
        gridDimension = +prompt("Invalid! Please select a number between 1 and 100: ");
    }

    removeGrid();
    createGrid(gridDimension);
});




