const container = document.querySelector(".inner-container");

function createGridRows() {
    for (let i = 1; i <= 16; i++) {
        container.innerHTML += `<div class="row-style" style="
        box-sizing: border-box;border: 1px solid black;width: 100%;height: ${660 / 16}px;display: flex;"></div>`
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
    let pixelDivs = ``
    for (let i = 1; i <= 16; i++) {
        pixelDivs += `<div class="pixel" style="width: ${960 / 16}px; height:${660 / 16}px;
        box-sizing: border-box; border: 1px solid black;"></div>`;
    }

    return pixelDivs;
}

function enableColoring() {
    const squares = document.getElementsByClassName("pixel");
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

function createGrid() {
    createGridRows();
    createGridColumns()
    enableColoring();
}

createGrid();