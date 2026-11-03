"use strict";
// На складі зберігається певна кількість ящиків з яблуками (наприклад, 15). Коли під’їде машина для завантаження, попросити користувача ввести, скільки ящиків завантажити у першу машину, у другу і т. д., поки на складі не закінчаться ящики з яблуками. Передбачити той випадок, коли користувач вводить кількість, що перевищує поточну кількість ящиків на складі.
if (confirm("Почати тестування?")) {
    let boxNum = 15;
    do {
        let userNumber = parseInt(prompt(`На складі ${boxNum} ящиків. Скільки ящиків загружати?`));
        if (userNumber > boxNum) {
            alert(`Такої кількості немає на складі!`);
        }
        else if (userNumber === boxNum) {
            boxNum = boxNum - userNumber;
        }
        else if (userNumber < boxNum) {
            boxNum = boxNum - userNumber;
            alert(`Залишилось ${boxNum} ящиків`);
        }
    } while (boxNum !== 0);
    document.write("Всі ящики загружені");
}
//# sourceMappingURL=task2.js.map