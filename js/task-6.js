let input;
let total = 0;
while (true) {
    input = prompt('Введи число');

    if (input === null) {
        break;
    }

    input = Number(input);
    const notANamber = Number.isNaN(input);

    if (notANamber) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total += input;
}
alert(`Общая сумма чисел равна ${total}`);
