let count = 0;

document.getElementById("decrease-btn").onclick = function(){
    document.getElementById("counter-value").textContent = --count
}

document.getElementById("increase-btn").onclick = function(){
    document.getElementById("counter-value").textContent = ++count
}

document.getElementById("reset-btn").onclick = function(){
    count = 0;
    document.getElementById("counter-value").textContent = count
}
 