const container = document.querySelector(".inner-container");

function createGridRows() {
    for (let i = 1; i <= 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row-style");
        container.appendChild(row);
    }
}

function createGridColumns() {
    const rows = document.getElementsByClassName("row-style");
    for (let i = 0; i < 16; i++) {
        rows[i].innerHTML += rows[i].innerHTML + createGridPixels();//adding 16 divs with class "grid" to each row
    }
    console.log(rows)
}

function createGridPixels() {//create individual grids
    let gridDivs = ``
    for (let i = 1; i <= 16; i++) {
        gridDivs += `<div class="grid"></div>`;
    }
    return gridDivs
}

function enableColoring() {
    const squares = document.getElementsByClassName("grid");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", () => {
            squares[i].style.backgroundColor = `rgb(${getRGBValue()} ${getRGBValue()} ${getRGBValue()})`;
        })
    }
}

function getRGBValue() {
    //random number from 0 (inclusive) to 256 (inclusive)
    return (Math.floor(Math.random() * 256)).toString();
}

createGridRows();
createGridColumns()
enableColoring();