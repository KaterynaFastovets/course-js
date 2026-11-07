"use strict";
// Створити окремі функції, які для 4 чисел знаходять: 1-суму; 2-добуток;  3-середнє арифметичне; 4-мінімальне значення.
if (confirm("Почати тестування?")) {
    const sum = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
    const multiply = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;
    const average = (num1, num2, num3, num4) => sum(num1, num2, num3, num4) / 4;
    const getMinNumber = (num1, num2, num3, num4) => {
        let minNumber;
        if (num1 < num2) {
            minNumber = num1;
        }
        else {
            minNumber = num2;
        }
        if (minNumber > num3) {
            minNumber = num3;
        }
        if (minNumber > num4) {
            minNumber = num4;
        }
        return minNumber;
    };
    const num1 = parseInt(prompt("Введіть перше число:"));
    const num2 = parseInt(prompt("Введіть друге число:"));
    const num3 = parseInt(prompt("Введіть третє число:"));
    const num4 = parseInt(prompt("Введіть четверте число:"));
    const sumResult = sum(num1, num2, num3, num4);
    const multiplyResult = multiply(num1, num2, num3, num4);
    const averageResult = average(num1, num2, num3, num4);
    const getMinNumberResult = getMinNumber(num1, num2, num3, num4);
    document.write(`Сума чисел - ${sumResult}<br> Добуток чисел - ${multiplyResult}<br> Середнє арифметичне чисел - ${averageResult}<br> Мінімальне значення - ${getMinNumberResult} `);
}
//# sourceMappingURL=task3.js.map