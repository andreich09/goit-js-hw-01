let userInput = prompt('Укажите страну для доставки!');
const normalizedInput = userInput.toLowerCase();
switch (normalizedInput) {
    case 'китай':
        console.log(`Доставка в ${normalizedInput} будет стоить 100 кредитов`);
        break;

    case 'чили':
        console.log(`Доставка в ${normalizedInput} будет стоить 250 кредитов`);
        break;

    case 'австралия':
        console.log(`Доставка в ${normalizedInput} будет стоить 170 кредитов`);
        break;

    case 'индия':
        console.log(`Доставка в ${normalizedInput} будет стоить 80 кредитов`);
        break;

    case 'ямайка':
        console.log(`Доставка в ${normalizedInput} будет стоить 120 кредитов`);
        break;

    default:
        alert('В вашей стране доставка не доступна');
}
