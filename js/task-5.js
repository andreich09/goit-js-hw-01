let userInput = prompt('Укажите страну для доставки!');
'userinput before: ', userInput;
const normalizedInput = userInput.toLowerCase();
'userinput after: ', userInput;
'normalizedInput: ', normalizedInput;
let price = 0;
switch (normalizedInput) {
    case 'китай':
        price = 100;
        break;

    case 'чили':
        price = 250;
        break;

    case 'австралия':
        price = 170;
        break;

    case 'индия':
        price = 80;
        break;

    case 'ямайка':
        price = 120;
        break;

    default:
        alert('В вашей стране доставка не доступна');
}
let message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
console.log(message);
