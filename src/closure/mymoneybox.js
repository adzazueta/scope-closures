function moneyBox(coins) {
    let savedCoins = 0;
    savedCoins += coins;

    console.log(`MoneyBox: $${savedCoins}`);
}

moneyBox(5);
moneyBox(5);

function closureMoneyBox(savedCoins = 0) {
    return function countCoins(coins) {
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`);
    };
}

const myClosureMoneyBox = closureMoneyBox();
myClosureMoneyBox(5);
myClosureMoneyBox(5);
myClosureMoneyBox(15);

const alexClosureMoneyBox = closureMoneyBox();
alexClosureMoneyBox(5);
alexClosureMoneyBox(5);
