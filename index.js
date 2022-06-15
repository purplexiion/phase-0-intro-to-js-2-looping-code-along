function writeCards(CardsArr, event) {
    let thankYouCards = [];
    for (let i = 0; i < CardsArr.length; i++) {
        thankYouCards.push(`Thank you, ${CardsArr[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}


function countDown(startNumber) {
    while (startNumber > 0) {
        console.log(startNumber);
        startNumber -= 1;
    }
    console.log(startNumber);
}