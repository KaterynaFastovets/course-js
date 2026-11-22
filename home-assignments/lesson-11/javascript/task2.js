"use strict";
if (confirm("Почати тестування?")) {
    // .Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
    const totalProfit = [
        [1, 1, 1, 1, 7, 22, 1],
        [1, 7, 22, 1, 7, 24, 1],
        [1, 1, 1, 1, 777, 22, 1],
        [47, 1, 500, 500, 7, 500, 1],
        [1, 7, 1220, 1, 7, 22, 1],
        [1, 1, 1, 1, 7, 227, 1],
        [47, 1, 200, 1, 7, 22, 1],
        [1, 7, 22, 1, 7, 22, 1],
        [1, 1, 1, 1, 7, 22, 1],
        [50, 50, 50, 50, 500, 50, 150],
    ];
    console.log(totalProfit);
    // 1.загальний прибуток кожного масиву за тиждень;
    let weeklyProfitByStore = [];
    for (let storeProfit of totalProfit) {
        let weeklyProfit = 0;
        for (let i = 0; i < storeProfit.length; i++) {
            weeklyProfit += storeProfit[i];
        }
        weeklyProfitByStore.push(weeklyProfit);
    }
    weeklyProfitByStore.forEach((sum, num) => {
        console.log(`Магазин ${num + 1} - прибуток ${sum}`);
    });
    // 2. загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
    let dailyProfitAllStores = [];
    for (let i = 0; i < totalProfit[0].length; i++) {
        let dailyProfit = 0;
        for (let j = 0; j < totalProfit.length; j++) {
            dailyProfit += totalProfit[j][i];
        }
        dailyProfitAllStores.push(dailyProfit);
    }
    dailyProfitAllStores.forEach((sum, day) => {
        console.log(`Прибуток за ${day + 1} день тижня - ${sum} `);
    });
    // 3. загальний прибуток за робочі дні
    let totalWeekdayProfit = 0;
    for (const store of totalProfit) {
        for (let i = 0; i < 5; i++) {
            totalWeekdayProfit += store[i];
        }
    }
    console.log(`Загальний прибуток за робочі дні - ${totalWeekdayProfit}`);
    // 4. загальний прибуток за вихідні дні
    let totalWeekendProfit = 0;
    for (const store of totalProfit) {
        for (let i = 5; i < store.length; i++) {
            totalWeekendProfit += store[i];
        }
    }
    console.log(`Загальний прибуток за вихідні дні - ${totalWeekendProfit}`);
    // 5.максимальний прибуток за середу
    const maxWednesdayProfit = Math.max(...totalProfit.map((store) => store[2]));
    console.log(`Максимальний прибуток за середу — ${maxWednesdayProfit}`);
    // 6. сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
    let profitsAbove200 = totalProfit.flat().filter((profit) => profit > 200);
    console.log(profitsAbove200);
    // 7. відсортувати кожен тиждень за зростанням
    for (const storeProfit of totalProfit) {
        for (let i = 0; i < storeProfit.length; i++) {
            storeProfit.sort((a, b) => a - b);
        }
    }
    console.log(totalProfit);
    // 8.  відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
    let sortedWeeksByMaxProfitDescending = [...totalProfit];
    sortedWeeksByMaxProfitDescending.sort((a, b) => {
        return Math.max(...b) - Math.max(...a);
    });
    console.log(sortedWeeksByMaxProfitDescending);
    // 9. упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
    let sortedWeeksByTotalProfitDescending = [...totalProfit];
    sortedWeeksByTotalProfitDescending.sort((a, b) => {
        const profitA = a.reduce((sum, el) => sum + el, 0);
        const profitB = b.reduce((sum, el) => sum + el, 0);
        return profitB - profitA;
    });
    console.log(sortedWeeksByTotalProfitDescending);
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 1</h2>
      <p class="task__output">
       Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
      </p>
        <ol class="task__output">
                <li>
                  Загальний прибуток кожного масиву за тиждень - <code>[${weeklyProfitByStore}]</code>
                </li>
                <li>
                  Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.) - <code>[${dailyProfitAllStores}]</code>
                </li>
                <li>
                  Загальний прибуток за робочі дні - <code>${totalWeekdayProfit}</code>
                </li>
                <li>
                 Загальний прибуток за вихідні дні - <code>${totalWeekendProfit}</code>
                </li>
                <li>Максимальний прибуток за середу - <code>${maxWednesdayProfit}</code></li>
                <li>Сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200 <code>[${profitsAbove200}]</code></li>
                <li>Відсортувати кожен тиждень за зростанням. - <code> Результат перевірити в консолі розробника (Developer Tools).</code> </li>
                <li> Відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків - <code> Результат перевірити в консолі розробника (Developer Tools).</code> </li>
                <li>Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше). - <code> Результат перевірити в консолі розробника (Developer Tools).</code> </li>
              </ol>
    </section>
  `);
}
//# sourceMappingURL=task2.js.map