"use strict";
//   Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
if (confirm("Почати тестування?")) {
    let totalSumDay = 0;
    let totalSumWeek = 0;
    let totalSum = 0;
    const userWeekNum = parseInt(prompt(`За скільки тижнів будете вводити прибуток?`));
    for (let weekNum = 1; weekNum <= userWeekNum; weekNum++) {
        let totalSumWeek = 0;
        document.write(`<br>${weekNum}  - тиждень <br><br>`);
        for (let dayNum = 1; dayNum <= 7; dayNum++) {
            totalSumDay = parseInt(prompt(`${weekNum}  - тиждень \n Введіть прибуток за ${dayNum} день:`));
            totalSumWeek += totalSumDay;
            totalSum += totalSumDay;
            let dayWeek = "";
            switch (dayNum) {
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
            }
            document.write(`${dayWeek} - ${totalSumDay} грн <br><br>`);
        }
        document.write(`ПРИБУТОК за ${weekNum} тиждень - ${totalSumWeek} грн <br><br><br>`);
    }
    document.write(`<h3>Загальний прибуток - ${totalSum} грн</h3> `);
}
//# sourceMappingURL=task7.js.map