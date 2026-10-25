"use strict";
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
const minNumber = 1;
const maxNumber = 5;
let userAttempt = parseInt(prompt("Вгадайте число від 1 до 5. Спроба 1:"));
const randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1));
// //  min + Math.floor(Math.random() *(max - min + 1));
if (isNaN(userAttempt) ||
    minNumber < 1 ||
    maxNumber > 5 ||
    !Number.isInteger(userAttempt)) {
    throw new Error("Помилка, невірно введене число");
}
else {
    if (userAttempt === randomNumber) {
        document.write("Ви вгадали!");
    }
    else {
        userAttempt = parseInt(prompt("Не вгадали. Спроба 2:"));
    }
    if (userAttempt === randomNumber) {
        document.write(`Ви вгадали! Це число - ${randomNumber}`);
    }
    else {
        document.write(`Не вгадали. Секретне число - ${randomNumber}`);
    }
}
//# sourceMappingURL=task3.js.map