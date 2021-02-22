let coins = [10, 6, 1];
const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while (amount > 0) {
        if (coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        } else {
            i++;
        }
    }
    return coinTotal;
};

// console.log(makeChange([1, 6, 10], 21));


// Brute Force algo (Find every possible solution)
const makeChange02 = (value) => {
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin) => {
        if (value - coin >= 0) {
            let curMinCoins = makeChange02(value - coin);
            if(minCoins === undefined || curMinCoins<minCoins){
                minCoins = curMinCoins;
            }
        }
    });
    return minCoins + 1;
};
console.log(makeChange02(21));
