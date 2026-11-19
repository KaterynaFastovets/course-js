"use strict";
if (confirm("Почати тестування?")) {
    //   Дано історію цін на цінні папери за деякий період (згенерувати  від 1 до 10000)
    const numberElements = 1 + Math.floor(Math.random() * 365);
    const prices = Array.from({ length: numberElements }, () => 1 + Math.floor(Math.random() * 10000));
    // !1. Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
    const pricesAbove1000 = prices.filter((el) => el > 1000);
    // !2. Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
    const indexesAbove1000 = prices.filter((el, i) => {
        if (el > 1000)
            i++;
    });
    // 3. Сформувати список з тих цін, які більші за попереднє значення
    const pricesHigherThanPrevious = [];
    // 4.Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
    const pricesInPercentOfMax = [];
    // 5. Підрахувати кількість змін цін
    const priceChangesCount = 0;
    // !6.Визначити, чи є ціна, що менше 1000
    const hasPriceBelow1000 = prices.some((el) => el < 1000);
    // !7. Визначати, чи усі ціни більше за 1000
    const allPricesAbove1000 = prices.every((el) => el > 1000);
    // !8. Підрахувати кількість цін, що більше за 1000
    const countPricesAbove1000 = prices.reduce((calc, el) => (el > 1000 ? calc + 1 : calc), 0);
    // !9. Підрахувати суму цін, що більше за 1000
    const sumPricesAbove1000 = prices.reduce((previousSum, el) => (el > 1000 ? previousSum + el : previousSum), 0);
    // 10.Знайти першу ціну, що більше за 1000
    const firstPriceAbove1000 = prices.find((el) => el > 1000);
    // 11. Знайти індекс першої ціни, що більше за 1000
    const firstIndexAbove1000 = -1;
    // 12.Знайти останню ціну, що більше за 100
    const lastPriceAbove1000 = prices.findLast((el) => el > 1000);
    // 13. Знайти індекс останньої ціни, що більше за 1000
    const lastIndexAbove1000 = -1;
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача </h2>
      <p class="task__output">
       Дано історію цін на цінні папери за деякий період (згенерувати  від 1 до 10000)<code> prices = [${prices}]</code> 
      </p>
        <ol class="task__output">
                <li>
                  Сформувати новий масив, у якому є тільки ті, що більші за 1000
                  грн. <br> <code> pricesAbove1000 = [${pricesAbove1000}]</code>
                </li>
                <li>
                  Сформувати новий масив, у якому є номери тільки тих, що більші
                  за 1000 грн.<br> <code> indexesAbove1000 = [${indexesAbove1000}]</code>
                </li>
                <li>
                  Сформувати список з тих цін, які більші за попереднє значення
                </li>
                <li>
                  Сформувати новий масив, що міститиме значення цін у відсотках
                  стосовно максимального
                </li>
                <li>Підрахувати кількість змін цін</li>
                <li>Визначити, чи є ціна, що менше 1000 - <code>${hasPriceBelow1000}</code></li>
                <li>Визначати, чи усі ціни більше за 1000</li>
                <li>Підрахувати кількість цін, що більше за 1000 <br> <code>countPricesAbove1000 = ${countPricesAbove1000}</code></li>
                <li>Підрахувати суму цін, що більше за 1000 <br> <code>sumPricesAbove1000 = ${sumPricesAbove1000}</code></li>
                <li>Знайти першу ціну, що більше за 1000</li>
                <li>Знайти індекс першої ціни, що більше за 1000</li>
                <li>Знайти останню ціну, що більше за 1000</li>
                <li>Знайти індекс останньої ціни, що більше за 1000</li>
              </ol>
    </section>
  `);
}
