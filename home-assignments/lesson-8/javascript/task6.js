"use strict";
//  Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
if (confirm("Почати тестування?")) {
    let userNumber = parseInt(prompt("Гра «Морський бій»! Введіть розмір ігрового поля (кількість клітинок):"));
    let numberOfShips = parseInt(prompt(`Введіть кількість одиночних кораблів (від 1 до ${userNumber}):`));
    let cellCount = new Array(userNumber).fill(0);
    let indexOfShip;
    for (let i = 1; i <= numberOfShips; i++) {
        do {
            indexOfShip = Math.floor(Math.random() * cellCount.length);
        } while (cellCount[indexOfShip] !== 0);
        cellCount[indexOfShip] = 1;
    }
    const battleship = (cellCount, userShotShip) => {
        if (cellCount[userShotShip - 1] === 1) {
            alert("Влучили! Ви потопили корабель!");
            cellCount[userShotShip - 1] = 0;
            return true;
        }
        else {
            alert("Промах!");
            return false;
        }
    };
    let userShotShip;
    let sunkenShips = 0;
    while (sunkenShips < numberOfShips) {
        userShotShip = parseInt(prompt(`Введіть номер клітинки від 1 до ${userNumber}:`));
        if (isNaN(userShotShip) || userShotShip < 1 || userShotShip > userNumber) {
            throw new Error("Неправильний номер клітинки!");
        }
        if (battleship(cellCount, userShotShip)) {
            sunkenShips++;
        }
    }
    document.write(`Вітаю! Ви потопили всі кораблі!`);
}
//# sourceMappingURL=task6.js.map