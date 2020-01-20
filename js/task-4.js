let credits = 23580;
const pricePerDroid = 3000;
let userInput = prompt('Введите количество дроидов для покупки');
let totalPrice = Number(userInput) * pricePerDroid;
let balance = credits - totalPrice;
let message;
if (userInput === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice <= credits) {
    message = `Вы купили ${userInput} дроидов, на счету осталось ${balance} кредитов.`;
} else {
    message = 'Недостаточно средств на счету!';
}
console.log(message);
