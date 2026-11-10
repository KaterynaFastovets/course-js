// Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

if (confirm("Почати тестування?")) {
  const getTable = (tr: number, td: number) => {
    if (isNaN(tr) || isNaN(td) || tr <= 0 || td <= 0) {
      throw new Error(
        "Кількість рядків і стовпців повинна бути додатним цілим числом!",
      );
    }

    document.write(`<table border="1px">`);

    for (let row = 1; row <= tr; row++) {
      document.write(`<tr>`);
      for (let col = 1; col <= td; col++) {
        document.write(`<td>Дані</td>`);
      }
      document.write(`</tr>`);
    }
    document.write(`</table>`);
  };
  const tr = parseInt(prompt("Скільки рядків в таблиці:")!);
  const td = parseInt(prompt("Скільки стовпців в таблиці:")!);

  getTable(tr, td);
}
