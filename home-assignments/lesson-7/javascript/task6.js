"use strict";
//   Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
if (confirm("Почати тестування?")) {
    const getNumberMonths = (numberMonths) => {
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
                throw new Error("Невірний номер місяця!");
        }
        return season;
    };
    const numberMonths = parseInt(prompt("Введіть номер місяця:"));
    const season = getNumberMonths(numberMonths);
    document.write(season);
}
//# sourceMappingURL=task6.js.map