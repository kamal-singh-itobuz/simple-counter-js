const count = document.querySelector(".number");
const allButtons = document.querySelector(".buttons");

function color(num) {
    if (num > 0) count.style.color = "green";
    else if (num < 0) count.style.color = "red";
    else count.style.color = "black"
}

allButtons.addEventListener('click', (e) => {
    const buttonId = e.target.dataset.buttonid;
    let num = parseInt(count.innerText);
    if (buttonId === "1") {
        num++;
        color(num);
        count.innerText = num;
    }
    else if (buttonId === "2") {
        num = 0;
        color(num);
        count.innerText = num;
    }
    else if (buttonId === "3") {
        num--;
        color(num);
        count.innerText = num;
    }
});