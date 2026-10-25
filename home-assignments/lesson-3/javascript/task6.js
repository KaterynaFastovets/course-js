"use strict";
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const dayNumber = parseInt(prompt("Ведіть номер дня тижня"));
let dayWeek = "";
switch (dayNumber) {
    case 1:
        dayWeek = "Понеділок";
        break;
    case 2:
        dayWeek = "Вівторок";
        break;
    case 3:
        dayWeek = "Середа";
        break;
    case 4:
        dayWeek = "Четвер";
        break;
    case 5:
        dayWeek = "П'ятниця";
        break;
    case 6:
        dayWeek = "Субота";
        break;
    case 7:
        dayWeek = "Неділя";
        break;
    default:
        dayWeek = "Невірне число!";
        break;
}
document.write(dayWeek);
//# sourceMappingURL=task6.js.map