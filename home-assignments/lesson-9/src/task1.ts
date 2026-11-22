if (confirm("Почати тестування?")) {
  // 1. Створити масив із вказаної кількості елементів, заповнених нулями.

  let numberElements = parseInt(
    prompt("Задача 1. Введіть кількість елементів:")!,
  );

  const arrTask1 = new Array(numberElements).fill(0);

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 1</h2>
      <p class="task__description">
        Користувач вводить кількість елементів.
        Створити масив, що складається з вказаної кількості
        елементів, заповнених нулями.
      </p>
      <div class="task__output">
        <p>Масив з ${numberElements} елементів, заповнених нулями:</p>
        <p>arrTask1 = [${arrTask1}]</p>
      </div>
    </section>
  `);

  // 2. Перша половина масиву заповнена 1, друга — 7.

  numberElements = parseInt(prompt("Задача 2. Введіть кількість елементів:")!);

  const arrTask2 = new Array(numberElements).fill(7);
  const half = Math.floor(arrTask2.length / 2);
  // arrTask2.fill(7, numElement / 2);
  for (let i = 0; i < half; i++) {
    arrTask2[i] = 1;
  }

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 2</h2>
      <p class="task__description">
        Користувач вводить кількість елементів.
        Створити масив, у якому перша половина заповнена
        1-цями, а друга — 7-ками.
      </p>
      <div class="task__output">
        <p>Масив з ${numberElements} елементів:</p>
        <p>arrTask2 = [${arrTask2}]</p>
      </div>
    </section>
  `);

  // 3. Перші 5 елементів заповнені 1, інші — 7.

  numberElements = parseInt(prompt("Задача 3. Введіть кількість елементів:")!);

  const arrTask3 = new Array(numberElements).fill(1).fill(7, 5);

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 3</h2>
      <p class="task__description">
        Користувач вводить кількість елементів.
        Створити масив, у якому перші 5 елементів
        заповнені 1-цями, а інші — 7-ками.
      </p>
      <div class="task__output">
        <p>Масив з ${numberElements} елементів:</p>
        <p>arrTask3 = [${arrTask3}]</p>
      </div>
    </section>
  `);

  //4. Дано масив елементів. Вивести на екран елементи, що більші за 100;

  let arrTask4 = [105, 15, 220, 144, 65, 101];
  const newArrTask4 = arrTask4.forEach((el) => el > 100);

  // const newArrTask4 = arrTask4.filter((el) => el > 100); // filter - створює новий масив

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 4</h2>
      <p class="task__description">
        Дано масив елементів. Вивести на екран
        елементи, що більші за 100.
      </p>
      <div class="task__output">
        <p>Початковий масив:</p>
        <p>arrTask4 = [${arrTask4}]</p>
        <p>Елементи, більші за 100:</p>
        <p>newArrTask4 = [${newArrTask4}]</p>
      </div>
    </section>
  `);

  // 5. Знайти добуток додатних елементів.

  const arrTask5 = [-2, 4, -5, 3, 10];

  const multiply = arrTask5.reduce(
    (multiplication, el) => (el > 0 ? (multiplication *= el) : multiplication),
    1,
  );

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 5</h2>
      <p class="task__description">
        Дано масив елементів. Знайти добуток
        додатних елементів.
      </p>
      <div class="task__output">
        <p>Початковий масив:</p>
        <p>arrTask5 = [${arrTask5}]</p>
        <p>Добуток додатних елементів:</p>
        <p>multiply = ${multiply}</p>
      </div>
    </section>
  `);

  // 6. Елементи, більші за перший, помножити на 2.

  const arrTask6 = [5, 2, 9, 10, 4, 8, 11, 3];

  const newArrTask6 = arrTask6.map((el) => {
    return el > arrTask6[0] ? el * 2 : el;
  });

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 6</h2>
      <p class="task__description">
        Дано масив елементів. Усі елементи,
        які більші за перший елемент, помножити на 2.
      </p>
      <div class="task__output">
        <p>Початковий масив:</p>
        <p>arrTask6 = [${arrTask6}]</p>
        <p>Новий масив:</p>
        <p>newArrTask6 = [${newArrTask6}]</p>
      </div>
    </section>
  `);

  // 7. Надати знижку 30% на товари дорожчі за 1000 грн.

  const arrTask7 = [1000, 1200, 1500, 500, 200];

  arrTask7.forEach((el, index, array) => {
    if (el > 1000) {
      array[index] *= 0.7;
    }
  });

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 7</h2>
      <p class="task__description">
        Дано масив цін. Змінити цей масив так,
        щоб на товари, ціна яких більша за 1000 грн,
        була надана знижка 30%.
      </p>
      <div class="task__output">
        <p>Масив цін після застосування знижки:</p>
        <p>arrTask7 = [${arrTask7}]</p>
      </div>
    </section>
  `);

  // 8. Сформувати масив номерів авто, які починаються на «А».

  const carNumbers = [
    "АА1234ВВ",
    "ВІ5678СС",
    "АВ9876КК",
    "СА1111ММ",
    "АА1554ВВ",
  ];

  const NewCarNumber = carNumbers.filter((value) => value[0] === "А");

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 8</h2>
      <p class="task__description">
        Дано масив номерів автомобілів.
        Сформувати новий масив тих номерів,
        які починаються на літеру «А».
      </p>
      <div class="task__output">
        <p>Початковий масив:</p>
        <p>carNumbers = [${carNumbers}]</p>
        <p>Новий масив:</p>
        <p>NewCarNumber = [${NewCarNumber}]</p>
      </div>
    </section>
  `);

  // 9. Сформувати масив із перших літер імен.

  const userName = ["Галя", "Вітя", "Юля", "Коля", "Яна"];

  const LetterOfUserName = userName.map((value) => value[0]);

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 9</h2>
      <p class="task__description">
        Дано масив імен. Сформувати масив
        із перших літер цих імен.
      </p>
      <div class="task__output">
        <p>Початковий масив:</p>
        <p>userName = [${userName}]</p>
        <p>Масив перших літер:</p>
        <p>LetterOfUserName = [${LetterOfUserName}]</p>
      </div>
    </section>
  `);

  // 10. Сформувати масив величин сплаченого податку (20%).

  const arrTask10 = [55, 200, 150, 1050, 660];

  const newArrTask10 = arrTask10.map((num) => num * 0.2);

  document.write(`
    <section class="task__result">
      <h2 class="task__title">Задача 10</h2>
      <p class="task__description">
        Дано масив цін у гривнях.
        Податок складає 20%.
        Сформувати масив, який містить величину
        сплаченого податку у гривнях.
      </p>
      <div class="task__output">
        <p>Початковий масив цін:</p>
        <p>arrTask10 = [${arrTask10}]</p>
        <p>Масив сплаченого податку:</p>
        <p>newArrTask10 = [${newArrTask10}]</p>
      </div>
    </section>
  `);
}
