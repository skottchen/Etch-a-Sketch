const container = document.querySelector(".inner-container");

function createGrid() {
    for (let i = 1; i <= 16 * 16; i++) {
        const square = document.createElement("div")
        square.classList.add("grid");
        container.appendChild(square);
        if (i % 16 == 0) {
            const linebreak = document.createElement("div")
            linebreak.classList.add("break");
            container.appendChild(linebreak);
        }
    }
}

function addColor() {
    const squares = document.getElementsByClassName("grid");
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", () => {
            squares[i].style.backgroundColor = "blue";
        })
    }
}

createGrid();
addColor();