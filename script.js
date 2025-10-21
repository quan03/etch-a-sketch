// Add your JavaScript code here
console.log('JavaScript file loaded successfully');

const container = document.querySelector(".flex-container");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    container.append(div);
}

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'blue';
    });