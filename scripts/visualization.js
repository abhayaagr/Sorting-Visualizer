var speed = 100;
var delayTime = 10000/(Math.floor(ip_size/10)*speed);
var delay = 0;

speedSlider.addEventListener("input", () => {
    ip_speed = speedSlider.value;
    setSpeed();
})

// Set speed function
function setSpeed(){
    switch(ip_speed){
        case "1": speed = 1; break;
        case "2": speed = 10; break;
        case "3": speed = 100; break;
        case "4": speed = 1000; break;
        case "5": speed = 10000; break;
    }
    delayTime = 10000/(Math.floor(ip_size/10)*speed);
}

function barUpdate(bar, size, updateClass){
    window.setTimeout( () => {
        bar.classList.remove("focus-Bar", "error-Bar", "modify-Bar", "sorted-Bar");
        bar.classList.add(updateClass);
        bar.style.height = size + "%";
        if(ip_size < 50)
            bar.innerText = size;
    },delay += delayTime);
}

function enable_btns(){
    window.setTimeout( () => {
        sizeSlider.disabled = false;
        speedSlider.disabled = false;
        dropdown.disabled = false;
        sortBtn.disabled = false;
        resetBtn.disabled = false;
    },delay += delayTime);
}