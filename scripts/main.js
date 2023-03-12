const counterH1 = document.getElementById("Number")
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")
const resetButton = document.getElementById("reset")

increaseButton.style.cursor = "pointer"
decreaseButton.style.cursor = "pointer"
resetButton.style.cursor = "pointer"

increaseButton.addEventListener("click", function(){
        let value = counterH1.innerHTML
        value++
        counterH1.innerHTML = value
        
    }, true
)

decreaseButton.addEventListener("click", function(){
        let value = counterH1.innerHTML
        value--
        counterH1.innerHTML = value
    }, true
)

resetButton.addEventListener("click", function(){
        counterH1.innerHTML = 0
    }, true
)
