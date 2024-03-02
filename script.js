const container = document.querySelector(".inner-container");
const generateGridBtn = document.getElementById("generateGrid");
const userInput = document.getElementById("pixels_per_side");
const clearGridBtn = document.getElementById("clear_grid");
const eraserBtn = document.getElementById("eraser");
const gridWidth = 960;
const gridHeight = 660;
let eraserOn = false;
createGrid(16); //default grid is 16 x 16
generateGridBtn.addEventListener("click", () => {
    let userInputVal = userInput.value;
    if (!Number.isInteger((+userInputVal))//must convert argument to a number for Number.isInteger to work
        || userInputVal < 1
        || userInputVal > 100
        || isNaN(userInputVal)) {
        alert("Please enter a whole number between 1 and 100 in the input field");
        userInput.value = "";
    } else {
        container.innerHTML = "";
        createGrid(userInputVal);
    }
})

clearGridBtn.addEventListener("click", () => {
    const pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = `white`;
    }
})

eraserBtn.addEventListener("click", () => {
    eraserOn = !eraserOn;
    if (eraserOn) {
        eraserBtn.textContent = "Eraser: On"
    } else {
        eraserBtn.textContent = "Eraser: Off"
    }
    enableOrDisableColoring();
})


function createGrid(userInputVal) {
    createGridRows(userInputVal);
    createGridColumns(userInputVal);
    enableOrDisableColoring();
}

function createGridRows(userInputVal) {
    for (let i = 1; i <= userInputVal; i++) {
        container.innerHTML += `<div class="row-style" style="
        box-sizing:border-box;border: 1px solid black; width: 100%;height: ${gridHeight / userInputVal}px;display: flex;"></div>`
    }
}

function createGridColumns(userInputVal) {
    const rows = document.getElementsByClassName("row-style");
    for (let i = 0; i < userInputVal; i++) {
        rows[i].innerHTML += rows[i].innerHTML + createGridPixels(userInputVal);//adding userInputVal divs with class "grid" to each row
    }
}

function createGridPixels(userInputVal) {//create individual grids
    let pixelDivs = ``
    for (let i = 1; i <= userInputVal; i++) {
        pixelDivs += `<div class="pixel" style="width: ${gridWidth / userInputVal}px; height:${gridHeight / userInputVal}px;
        box-sizing: border-box;border: 1px solid black; "></div>`;
    }

    return pixelDivs;
}

function enableOrDisableColoring() {
    const pixels = document.getElementsByClassName("pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", () => {
            if (!eraserOn) {
                pixels[i].style.backgroundColor = `rgb(${getRGBValue()} ${getRGBValue()} ${getRGBValue()})`;
            } else {
                pixels[i].style.backgroundColor = `white`;
            }
        })
    }
}

function getRGBValue() {
    //random number from 0 (inclusive) to 256 (inclusive)
    return (Math.floor(Math.random() * 256)).toString();
}