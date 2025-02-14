// Generating Array
var box = document.querySelector(".box");
var bar = [];
var bar_size = [];
const margin = 0.1;

function generateArray(){
    var n = ip_size;
    box.innerHTML = "";
    for(var i=0; i<n; i++){
        bar_size[i] =  Math.floor(Math.random() * 90) + 5;
        bar[i] = document.createElement("div");
        box.appendChild(bar[i]);
        bar[i].classList.add("default-Bar");
        bar[i].style.width = ((100-(n-1)*margin)/n) + "%";
        bar[i].style.height = bar_size[i] + "%";
        if(n < 50){
            bar[i].innerText = bar_size[i];
        }
    }
}

// Taking inputs from user
const sizeSlider = document.querySelector("#ip_size");
const speedSlider = document.querySelector("#ip_speed");
const dropdown = document.querySelector("#algos");

var ip_size = sizeSlider.value;
var ip_speed = speedSlider.value;
var algo = dropdown.value;
generateArray();

sizeSlider.addEventListener("input", () => {
    ip_size = sizeSlider.value;
    generateArray();
})

dropdown.addEventListener("input", () => {
    algo = dropdown.value;
})

// Handling Buttons
const sortBtn = document.querySelector(".sort");
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", generateArray);
sortBtn.addEventListener("click", () => {
    disable_btns();
    delay = 0;
    switch(algo){
        case "bubble": bubbleSort(); break;
        case "insertion": insertionSort(); break;
        case "selection": selectionSort(); break;
        case "quick": quickSort(); break;
        case "merge": mergeSort(); break;
        case "heap": heapSort(); break;
    }
    enable_btns();
})

// Disabling buttons
function disable_btns(){
    sizeSlider.disabled = true;
    speedSlider.disabled = true;
    dropdown.disabled = true;
    sortBtn.disabled = true;
    resetBtn.disabled = true;
}