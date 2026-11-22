if (confirm("Почати тестування?")) {
  // . Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

  let gameField: number[][] = Array.from({ length: 6 }, () => Array(6).fill(0));

  for (let i = 0; i < 5; i++) {
    let row: number;
    let col: number;

    do {
      row = Math.floor(Math.random() * 6);
      col = Math.floor(Math.random() * 6);
    } while (gameField[row][col] !== 0);

    gameField[row][col] = 1;
  }

  let ships = 5;
  let shots = 15;

  while (ships > 0 && shots > 0) {
    let userRow = parseInt(
      prompt("Ваш постріл. Введіть номер рядка (від 1 до 6:)")!,
    );
    let userColumn = parseInt(
      prompt("Ваш постріл. Введіть номер стовпця (від 1 до 6:)")!,
    );
    if (isNaN(userRow) || isNaN(userColumn)) {
      break;
    }
    if (userRow < 1 || userRow > 6 || userColumn < 1 || userColumn > 6) {
      alert("Некоректні координати! Спробуйте ще раз.");
      continue;
    }

    shots--;

    if (gameField[userRow - 1][userColumn - 1] === 1) {
      gameField[userRow - 1][userColumn - 1] = 2;
      ships--;

      alert(`Корабель потоплено! Залишилося - ${ships} кораблів.`);
    } else if (gameField[userRow - 1][userColumn - 1] === 0) {
      gameField[userRow - 1][userColumn - 1] = 2;
      alert("Промах. Наступний постріл:");
    } else alert("Промах. Ви сюди вже стріляли! Наступний постріл:");

    alert(`Залишилося снарядів: ${shots}`);
  }
  if (ships === 0) {
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 3</h2>
      <p class="task__output">
      Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди. <code> Вітаю! Ви Потопили всі кораблі!</code>  
      </p>
    </section>
  `);
  } else if (shots === 0) {
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 3</h2>
      <p class="task__output">
      Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
       <code>Гру закінчено. Ви програли.</code>  
      </p>    
    </section>
  `);
  } else {
    document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 3</h2>
      <p class="task__output">
      Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
       <code>Ви вийшли з гри!</code>  
      </p>    
    </section>
  `);
  }
}
