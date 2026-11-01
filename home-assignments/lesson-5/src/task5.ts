//Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm("Почати тестування?")) {
  let evenNumber = 0;
  let oddNumber = 0;

  for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    document.write(`${randomNumber}<br>`);
    if (randomNumber % 2 === 0) evenNumber++;
    else oddNumber++;
  }

  if (evenNumber > oddNumber)
    document.write(`Парних чисел більше - ${evenNumber}`);
  else if (evenNumber < oddNumber)
    document.write(`Непарних чисел більше - ${oddNumber}`);
  else document.write(`Однакова кількість парних та непарних чисел`);
}
