"use strict";
if (confirm("Почати тестування?")) {
    // . Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
    const getSomeArr = (row, col) => {
        const arr = [];
        for (let i = 0; i < row; i++) {
            arr[i] = [];
            for (let j = 0; j < col; j++) {
                arr[i][j] = 1 + Math.floor(Math.random() * 10);
            }
        }
        return arr;
    };
    const someArr = getSomeArr(12, 12);
    console.log(someArr);
    // const someArr = [
    //   [1, 1, 1, 1],
    //   [1, 7, 22, 1],
    //   [1, 1, 1, 1],
    //   [47, 1, 12, 1],
    // ];
    // 1. номери рядків від 0 до половини, стовпці від 0 до половини
    let topLeft = 0;
    for (let row = 0; row < Math.floor(someArr.length / 2); row++) {
        for (let col = 0; col < Math.floor(someArr[0].length / 2); col++) {
            topLeft += someArr[row][col];
        }
    }
    //  2.номери рядків від 0 до половини, стовпці від половини до кінця
    let topRight = 0;
    for (let row = 0; row < Math.floor(someArr.length / 2); row++) {
        for (let col = Math.floor(someArr[0].length / 2); col < someArr[0].length; col++) {
            topRight += someArr[row][col];
        }
    }
    // 3.номери рядків (від половини до кінця, стовпці від 0 до половини
    let bottomLeft = 0;
    for (let row = Math.floor(someArr.length / 2); row < someArr.length; row++) {
        for (let col = 0; col < Math.floor(someArr[0].length / 2); col++) {
            bottomLeft += someArr[row][col];
        }
    }
    // 4. номери рядків від половини до кінця , стовпці від половини до кінця
    let bottomRight = 0;
    for (let row = Math.floor(someArr.length / 2); row < someArr.length; row++) {
        for (let col = Math.floor(someArr[0].length / 2); col < someArr[0].length; col++) {
            bottomRight += someArr[row][col];
        }
    }
    // 5. Суму парних рядків
    let evenRowsSum = 0;
    for (let row = 0; row < someArr.length; row += 2) {
        for (let col of someArr[row]) {
            evenRowsSum += col;
        }
    }
    // 6.Суму непарних стовпців
    let oddColumnsSum = 0;
    for (let row of someArr) {
        for (let col = 1; col < someArr.length; col += 2) {
            oddColumnsSum += row[col];
        }
    }
    // 7. У парних рядках – непарні стовпці, у непарних – парні.
    let evenRowsOddColumnsSum = 0;
    for (let row = 0; row < someArr.length; row += 2) {
        for (let col = 1; col < someArr[row].length; col += 2) {
            evenRowsOddColumnsSum += someArr[row][col];
        }
    }
    let oddRowsEvenColumnsSum = 0;
    for (let row = 1; row < someArr.length; row += 2) {
        for (let col = 0; col < someArr[row].length; col += 2) {
            oddRowsEvenColumnsSum += someArr[row][col];
        }
    }
    let evenRowsOddColumnsOddRowsEvenColumnsSum = evenRowsOddColumnsSum + oddRowsEvenColumnsSum;
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 1</h2>
      <p class="task__output">
       Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
      </p>
        <ol class="task__output">
                <li>
                  номери рядків від 0 до половини, стовпці від 0 до половини - ${topLeft}
                </li>
                <li>
                  номери рядків від 0 до половини, стовпці від половини до кінця - ${topRight}
                </li>
                <li>
                  номери рядків (від половини до кінця, стовпці від 0 до половини  - ${bottomLeft}
                </li>
                <li>
                 номери рядків від половини до кінця , стовпці від половини до кінця - ${bottomRight}
                </li>
                <li>Суму парних рядків - ${evenRowsSum}</li>
                <li>Суму непарних стовпців - ${oddColumnsSum}</li>
                <li> У парних рядках – непарні стовпці, у непарних – парні : ${evenRowsOddColumnsOddRowsEvenColumnsSum}</li>
              </ol>
    </section>
  `);
}
//# sourceMappingURL=task1.js.map