let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let cards = [firstCard, secondCard]
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
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " / " + cards[1]
    if (sum <= 20) {
        message = "Hit?"
    }else if (sum === 21){
        message = "BLACKJACK BABEY!!!"
        hasBlackJack = true
    }else if (sum > 21){
        message = "Bust, House wins..."
        isAlive = false
    }
     messageEl.textContent = message
    console.log(message)
}

function newCard() {
    console.log("Dealing A Fresh One")
       let card = Math.floor(Math.random() * 11) + 1; 
       sum += card
       startGame()
    
    }


console.log("First card:", firstCard);
    console.log("Second card:", secondCard);
    console.log("Sum:", sum);
    console.log(message);


    