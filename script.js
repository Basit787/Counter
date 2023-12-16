let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let value = document.getElementById("data");
let reset = document.getElementById("reset");

let counter = 0;

plus.addEventListener('click', () => {
    if (counter < 20) {
        counter++;
        value.innerText = counter;
    }
});

minus.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        value.innerText = counter;
    }
})

reset.addEventListener('click', () => {
    counter = 0;
    value.innerText = counter;
})