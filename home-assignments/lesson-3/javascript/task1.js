"use strict";
// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
var _a, _b, _c;
const firstChildName = (_a = prompt("Введіть імя першої дитини")) !== null && _a !== void 0 ? _a : "Іра";
const numberCandiesFirstChild = parseInt((_b = prompt("Кількість цукерок")) !== null && _b !== void 0 ? _b : "20");
let secondChildName = prompt("Введіть імя другої дитини");
secondChildName = "Ваня";
const numberCandiesSecondChild = parseInt((_c = prompt("Кількість цукерок")) !== null && _c !== void 0 ? _c : "23");
if (firstChildName.trim() === "" ||
    secondChildName.trim() === "" ||
    !Number.isInteger(numberCandiesFirstChild) ||
    !Number.isInteger(numberCandiesSecondChild) ||
    numberCandiesFirstChild < 0 ||
    numberCandiesSecondChild < 0) {
    throw new Error("Помилка, некоректно введені дані!");
}
else if (numberCandiesFirstChild > numberCandiesSecondChild) {
    document.write(`У ${firstChildName} кількість цукерок більша!`);
}
else if (numberCandiesFirstChild < numberCandiesSecondChild) {
    document.write(`У ${secondChildName} кількість цукерок більша!`);
}
else {
    document.write("Діти мають однакову кількість цукерок!");
}
//# sourceMappingURL=task1.js.map