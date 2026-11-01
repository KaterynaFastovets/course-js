"use strict";
//  З клавіатури вводяться поступово числа. Знайти два найменші числа. Ввід здійснюється до тих пір, поки різниця між такими числами є більшою за 5.
if (confirm("Почати тестування?")) {
    let num = 0;
    let difference = 0;
    for (let i = 1; i <= 10; i++) {
        let randomNum = 1 + Math.floor(Math.random() * 10);
        num = randomNum;
        difference = Math.abs(randomNum - num);
        if (difference < 5)
            break;
        document.write(`${num}<br>`);
    }
}
//# sourceMappingURL=task11.js.map