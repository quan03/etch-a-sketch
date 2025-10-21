console.log('JavaScript file loaded successfully');

// DOM Selections
const container = document.querySelector(".flex-container");
const button = document.querySelector("button");

// Function Declarations
function createGrid(gridLength) {
    const gridSize = gridLength * gridLength;
    container.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        let div = document.createElement("div");
        container.append(div);
        }
    const divWidth = (100 / gridLength) + '%';
    container.style.setProperty('--div-width', divWidth);
}

// Event Listeners
container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue';
    });

button.addEventListener('click', () => {
    const gridLength = Number(prompt("How many squares per side for the new grid?"));
    if (gridLength > 100 || gridLength < 1 || isNaN(gridLength)) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    createGrid(gridLength);
});

// Initialize 16x16 grid when user loads app for 1st time
createGrid(16);
