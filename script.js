const container = document.querySelector(".inner-container");

for(let i = 1; i <= 16 * 16; i++){
    const square = document.createElement("div")
    square.classList.add("grid");
    container.appendChild(square);
    if(i % 16 == 0){
        const linebreak = document.createElement("div")
        linebreak.classList.add("break");
        container.appendChild(linebreak);
    }
}


