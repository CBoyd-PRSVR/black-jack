let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "
if (sum < 21) {
    message = "draw again?"
} else if (sum === 21){
    message = "BLACKJACK BABEY!!!"
    hasBlackJack = true
}else if (sum > 21){
    message = "Bust, House wins..."
    isAlive = false
}

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
function startGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " / " + secondCard
    if (sum <= 20) {
        message = "Hit?"
    }else if (sum === 21){
        message = "BLACKJACK BABEY!!!"
        hasBlackJack = true
    }else if (sum > 21){
        message = "Bust, House wins..."
        isAlive = false
    }

    function hit() {
console.log("Dealing A Fresh One")
    }

    
    messageEl.textContent = message
    console.log(message)
}

console.log("First card:", firstCard);
    console.log("Second card:", secondCard);
    console.log("Sum:", sum);
    console.log(message);


