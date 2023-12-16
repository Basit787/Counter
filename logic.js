let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");
let final = document.getElementById("data");
let reset = document.getElementById("reset")
let counter = 0;

increment.addEventListener("click", () => {
    counter++;
    final.innerText = counter;
})

decrement.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        final.innerText = counter;
    }
})
reset.addEventListener("click", () => {
    counter = 0;
    final.innerText = counter;
})

