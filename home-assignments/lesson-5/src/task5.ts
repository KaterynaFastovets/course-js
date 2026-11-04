//Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm("Почати тестування?")) {
  let evenNumber = 0;
  let oddNumber = 0;
  document.write(`<div style="     display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
      margin: 0;
      padding: 15px;
      box-sizing: border-box;
      gap: 15px;">`);
  for (let i = 1; i <= 100; i++) {
    let randomNumber = 1 + Math.floor(Math.random() * 1000);
    document.write(`<span>${randomNumber}</span>`);
    if (randomNumber % 2 === 0) evenNumber++;
    else oddNumber++;
  }

  if (evenNumber > oddNumber)
    document.write(`Парних чисел більше - ${evenNumber}`);
  else if (evenNumber < oddNumber)
    document.write(`Непарних чисел більше - ${oddNumber}`);
  else document.write(`Однакова кількість парних та непарних чисел`);
  document.write(`</div>`);
}
