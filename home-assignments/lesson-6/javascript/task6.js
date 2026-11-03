"use strict";
// Побудувати ялинку.
if (confirm("Почати тестування?")) {
    let item = "";
    for (let i = 0; i < 3; i++) {
        item = "";
        for (let tier = 0; tier < 6; tier++) {
            item += "o";
            document.write(`${item}<br>`);
        }
    }
}
//# sourceMappingURL=task6.js.map