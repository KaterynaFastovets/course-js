"use strict";
//  З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
const numberMonths = parseInt(prompt("Введіть номер місяця"));
let season;
switch (numberMonths) {
    case 1:
    case 2:
    case 12:
        season = "Зима";
        break;
    case 3:
    case 4:
    case 5:
        season = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        season = "Літо";
        break;
    case 9:
    case 10:
    case 11:
        season = "Осінь";
        break;
    default:
        season = "Невірний номер місяця!";
        break;
}
document.write(season);
//# sourceMappingURL=task7.js.map