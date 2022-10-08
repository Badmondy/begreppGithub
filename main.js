let cube = document.getElementById("cube");
let colorBtn = document.getElementById("blackBtn");
let resetBtn = document.getElementById("reset");


resetBtn.addEventListener('click', reset);
colorBtn.addEventListener('click', blackColor);


function blackColor(){
    cube.style.backgroundColor = "black";
}

function reset(){
    cube.style.backgroundColor = "rgb(17, 166, 17)";
}
