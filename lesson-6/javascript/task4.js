"use strict";
//  З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
if (confirm("Почати тестування?")) {
    let difference = 0;
    let minNum1 = 0;
    let minNum2 = 0;
    let num1 = parseInt(prompt("Num:"));
    let num2 = parseInt(prompt("Num:"));
    if (num1 < num2) {
        minNum1 = num1;
        minNum2 = num2;
    }
    else if (num2 < num1) {
        minNum1 = num2;
        minNum2 = num1;
    }
    else {
        minNum1 = num1;
        minNum2 = minNum1;
    }
    do {
        let userNum = parseInt(prompt("Num:"));
        if (userNum < minNum1) {
            minNum2 = minNum1;
            minNum1 = userNum;
        }
        else if (userNum < minNum2)
            minNum2 = userNum;
        difference = minNum2 - minNum1;
    } while (difference > 5);
    document.write(`Найменші числа ${minNum1} і ${minNum2}`);
}
//# sourceMappingURL=task4.js.map