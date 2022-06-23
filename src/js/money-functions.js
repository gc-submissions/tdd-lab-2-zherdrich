
// let formatCurrency = (amount) => {
//     if (amount >= 0) {
//         amount = amount.toFixed(2);
//         let text = 
//     }
// }


let getCoins = (cents) => {
    let numberOfQuarters = Math.floor(cents / 25);
    let remainingChange = (cents - 25 * numberOfQuarters).toFixed(2);
    let numberOfDimes = Math.floor(remainingChange / 10);
    remainingChange = (remainingChange - 10 * numberOfDimes).toFixed(2);
    let numberOfNickels = Math.floor(remainingChange / 5);
    remainingChange = (remainingChange - 5 * numberOfNickels).toFixed(2);
    let numberOfPennies = Math.floor(remainingChange / 1);
    
    let coins = {
        quarters: numberOfQuarters,
        dimes: numberOfDimes,
        nickels: numberOfNickels,
        pennies: numberOfPennies,
    }
    return coins;
}

module.exports = {getCoins}