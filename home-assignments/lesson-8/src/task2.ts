//  Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm("Почати тестування?")) {
  const studentGrade = [5, 3, 2, 4, 1, 5, 5, 5, 4, 2];
  function getCountTwos(garde: number[]) {
    let counter = 0;
    for (let i = 0; i < garde.length; i++) {
      if (garde[i] === 2) counter++;
    }
    return counter;
  }

  function countGoodGrades(garde: number[]) {
    let counter = 0;
    for (let i = 0; i < garde.length; i++) {
      if (garde[i] === 5 || garde[i] === 4) counter++;
    }
    return counter;
  }

  function countBelowAverageGrades(garde: number[]) {
    let counter = 0;
    for (let i = 0; i < garde.length; i++) {
      if (garde[i] < 3) counter++;
    }
    return counter;
  }

  const countTwos = getCountTwos(studentGrade);
  const goodGrades = countGoodGrades(studentGrade);
  const belowAverageGrades = countBelowAverageGrades(studentGrade);

  document.write(`<p>Kількість двійок - ${countTwos}</p>`);
  document.write(`<p>Kількість хороших оцінок - ${goodGrades}</p>`);
  document.write(
    `<p>Kількість оцінок нижче середнього - ${belowAverageGrades}</p>`,
  );
}
