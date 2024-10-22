// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


// Add a row
// User Story 1: Add Row
function addR() {
    //alert("Clicked Add Row"); // Replace this line with your code.
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(); 
    if(numRows < 1){
        while(numCols > 1){
            removeC();
        }
    }
    numRows++; 


    for(let i = 0; i < numCols; i++){
        let cell = newRow.insertCell();
        cell.onclick = () => colorCell(cell);  // Helper Function - click to color the cell (single)
    }

     // If no cols exist yet, add the first cols
    if(numCols == 0){
        addC();
    }
}

// Add a column
// User Story 1: Add Column
function addC() {
    //alert("Clicked Add Col"); // Replace this line with your code.
    let grid = document.getElementById("grid");
    let rows = grid.rows;
    if(numCols < 1){
        while(numRows > 1){
            removeR();
        }
    }
    numCols++; 


    for (let i = 0; i < numRows; i++) {
        let cell = rows[i].insertCell();
        cell.onclick = () => colorCell(cell);  // Helper Function - click to color the cell (single)
    }

     // If no rows exist yet, add the first row
    if(numRows == 0){
        addR();
    }

   }

// Remove a row
// User Story 1: Remove Row
function removeR() {
    if (numRows > 0) 
    {
        let grid = document.getElementById("grid");
        grid.deleteRow(-1); // Remove the last row
        numRows--; // Decrement row count
    }
}

// Remove a column
// User Story 1: Remove Column
function removeC() {
    if (numCols > 0) 
        {
            let grid = document.getElementById("grid");
            let rows = grid.rows;
            numCols--; // Decrement column count

            // Loop through all rows and remove the last cell
            for (let i = 0; i < numRows; i++) {
                rows[i].deleteCell(-1);
        }
    }
}

//Color a single cell
function colorCell(cell) {
    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");
    let rows = grid.rows;

    for(let i = 0; i < numRows; i++) {
        let cell = rows[i].cells;

        for(let j = 0; j < numCols; j++) {
            if(rows[i].cells[j].style.backgroundColor == "") { // Checks if cells has not yet been colored
                colorCell(rows[i].cells[j]);
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let grid = document.getElementById("grid");
    let rows = grid.rows;

    for(let i = 0; i < numRows; i++) {
        let cell = rows[i].cells;

        for(let j = 0; j < numCols; j++) {
            colorCell(rows[i].cells[j]);  
        }
    }
}

// Clear all cells of their color
function clearAll(){
    let grid = document.getElementById("grid");
    let rows = grid.rows;

    for(let i = 0; i < numRows;i++) {
        let cell = rows[i].cells;

        for(let j = 0; j < numCols; j++) {
            cell[j].style.backgroundColor = "";
        }
    }
}

// Clear all cells off the screen
function clearAllCells() {
    if(numRows !== 0) {
        for (let a = numRows; a > 0; a--) { removeR(); }
    }
    if(numCols !== 0) {
        for (let b = numCols; b > 0; b--) { removeC(); }
    }
}