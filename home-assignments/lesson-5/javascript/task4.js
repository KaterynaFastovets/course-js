"use strict";
//Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача
if (confirm("Почати тестування?")) {
    const userSecretNum = parseInt(prompt("Загадайте число від 1 - 5"));
    for (let tentative = 1; tentative <= 3; tentative++) {
        let randomNum = Math.floor(Math.random() * 5) + 1;
        if (randomNum !== userSecretNum) {
            document.write(`Спроба ${tentative} - Не вгадали.<br>`);
        }
        else {
            document.write(`Вгадали число ${userSecretNum} за ${tentative} спроби!`);
            break;
        }
    }
}
//# sourceMappingURL=task4.js.map