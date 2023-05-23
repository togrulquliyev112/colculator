let screen = document.querySelector(".display")
let buttons = document.querySelectorAll(".btn")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")

buttons.forEach(button => {

    button.addEventListener('click', (e) => {
        let value = e.target.dataset.num
        screen.value += value
    })
});


clear.addEventListener('click', (e) => {
    screen.value = ""
})





function calcc() {
    if (screen.value === '') {
        screen.value = "";
    }
    else {
        screen.value = eval(screen.value)
        console.log(screen.value);
    }
}