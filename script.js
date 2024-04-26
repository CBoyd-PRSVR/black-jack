let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard
if (sum < 21) {
    console.log("draw again?")
} else if (sum === 21){
    console.log("BLACKJACK BABEY!!!")
}else if (sum > 21){
    console.log("Bust, House wins...")
}