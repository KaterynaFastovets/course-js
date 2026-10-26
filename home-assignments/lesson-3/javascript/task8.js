"use strict";
// Задача . Полювання. Заєць знаходиться у верхньому лівому кутку поля. Поле складається з двох рядків і двох стовпців. За один крок заєць може стрибнути у будь-яку із вільних клітинок. Користувач ставить пастку вказуючи номер рядка і стовпця клітинки. Якщо заєць потрапляє у пастку, то користувач виграв і отримав 100 балів. Якщо користувач зловить зайця за другою спробою, то одержує 50 балів.
let rabbitLocated = Math.floor(Math.random() * 3) + 1;
let rabbitLocatedRow = rabbitLocated === 1 ? 1 : 2;
let rabbitLocatedCol = rabbitLocated === 1 ? 2 : rabbitLocated === 2 ? 1 : 2;
let userRow = parseInt(prompt("Пастка для зайчика, Спроба №1. Задайте номер рядка - 1 або 2?"));
let userCol = parseInt(prompt("Тепер номер стовпця - 1 або 2?"));
if (userRow === rabbitLocatedRow && userCol === rabbitLocatedCol) {
    document.write(`
    <img src="../img/rabbitin.webp"
         alt="rabbit"
         style="width: 226px; height: 339px; object-fit: cover;">
    <p>Ви спіймали зайчика! Отримуєте 100 балів!</p>
  `);
}
else {
    userRow = parseInt(prompt("Не спіймали! Спроба №2. Вкажіть рядок: 1 або 2"));
    userCol = parseInt(prompt("Вкажіть стовпець: 1 або 2"));
    if (userRow === rabbitLocatedRow && userCol === rabbitLocatedCol) {
        document.write(`
      <img src="../img/rabbitin.webp"
           alt="rabbit"
           style="width: 226px; height: 339px; object-fit: cover;">
      <p>Ви спіймали зайчика з другої спроби! Отримуєте 50 балів!</p>
    `);
    }
    else {
        document.write(`
      <img src="../img/rabbit.jpg"
           alt="rabbit"
           style="width: 226px; height: 339px; object-fit: cover;">
      <p>Не спіймали зайчика!</p>
    `);
    }
}
//# sourceMappingURL=task8.js.map