"use strict";
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
const categoryDrivers = prompt("Введіть назву категорії водія (A, B, C)");
let driver = "";
switch (categoryDrivers === null || categoryDrivers === void 0 ? void 0 : categoryDrivers.toUpperCase()) {
    case "A":
        driver = "Водій водить мотоцикл";
        break;
    case "B":
        driver = "Водій водить легковий автомобіль";
        break;
    case "C":
        driver = "Водій водить вантажний автомобіль";
        break;
    default:
        driver = "Невірно введена категорія водійського посвідчення";
        break;
}
document.write(driver);
//# sourceMappingURL=task5.js.map