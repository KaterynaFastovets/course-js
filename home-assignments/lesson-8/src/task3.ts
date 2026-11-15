//  Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

if (confirm("Почати тестування?")) {
  const arrVisitors = [65, 70, 120, 10, 80, 120, 15];

  const getVisitorStatistics = (visitors: number[]) => {
    let min = Math.min(...visitors);
    let max = Math.max(...visitors);
    let daysWithVisitorsLessThan20 = [];
    let daysWithMinVisitors = [];
    let daysWithMaxVisitors = [];
    let totalWeekdayVisitors = 0;
    let totalWeekendVisitors = 0;

    for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] < 20) daysWithVisitorsLessThan20.push(i + 1);
      if (visitors[i]=== min) daysWithMinVisitors.push(i + 1);
      if (visitors[i] === max) daysWithMaxVisitors.push(i + 1);
      if (i < 5) totalWeekdayVisitors += visitors[i];
      if (i >= 5 && i < visitors.length + 1)
        totalWeekendVisitors += visitors[i];
    }

    document.write(
      `Дні, коли відвідувачів менше 20: ${daysWithVisitorsLessThan20}<br>`,
    );
    document.write(
      `Дні з мінімальною кількістю відвідувачів: ${daysWithMinVisitors} <br>`,
    );
    document.write(
      `Дні з максимальною кількістю відвідувачів: ${daysWithMaxVisitors} <br>`,
    );
    document.write(
      `Загальна кількість клієнтів у робочі дні: ${totalWeekdayVisitors} <br>`,
    );
    document.write(
      `Загальна кількість клієнтів у вихідні: ${totalWeekendVisitors} <br>`,
    );
  };
  getVisitorStatistics(arrVisitors);
}
