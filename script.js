// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.

    cell.onclick = () => colorCell(cell);  // Helper Function - click to color the cell (single)
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.

    cell.onclick = () => colorCell(cell);  // Helper Function - click to color the cell (single)
}

// Remove a row
function removeR() {
    if (numRows > 0) 
    {
        let grid = document.getElementById("grid");
        grid.deleteRow(-1); // Remove the last row
        numRows--; // Decrement row count
    }
}

// Remove a column
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
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}