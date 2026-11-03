"use strict";
// Зобразити рівнобедрений трикутник із символів ^. Висоту задає користувач. Наприклад, на екрані висота =5.
if (confirm("Почати тестування?")) {
    const heigh = parseInt(prompt("Задайте висоту трикутника до 10"));
    let item = "^";
    document.write(`<p>${item}</p>`);
    for (let i = 1; i <= heigh; i++) {
        item += "^^";
        document.write(`<p>${item}</p>`);
    }
}
//# sourceMappingURL=task1.js.map