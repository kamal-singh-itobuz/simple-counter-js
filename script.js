const count = document.getElementsByClassName("number")[0];

function color(num){
    if(num > 0) count.style.color = "green";
    else if(num < 0) count.style.color = "red";
    else count.style.color = "black"
}

function increment() {
    let num = parseInt(count.innerHTML);
    num++;
    color(num);
    count.innerText = num;
}

function resetToZero() {
    num = 0;
    color(num);
    count.innerText = num;
}

function decrement() {
    let num = parseInt(count.innerHTML);
    num--;
    color(num);
    count.innerText = num;
}