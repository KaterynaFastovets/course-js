// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

const firstChildName = prompt("Введіть імя першої дитини") ?? "Іра";
const numberCandiesFirstChild: number = parseInt(
  prompt("Кількість цукерок") ?? "20",
);
let secondChildName = prompt("Введіть імя другої дитини");
secondChildName = "Ваня";
const numberCandiesSecondChild: number = parseInt(
  prompt("Кількість цукерок") ?? "23",
);
if (
  firstChildName.trim() === "" ||
  secondChildName.trim() === "" ||
  !Number.isInteger(numberCandiesFirstChild) ||
  !Number.isInteger(numberCandiesSecondChild) ||
  numberCandiesFirstChild < 0 ||
  numberCandiesSecondChild < 0
) {
  throw new Error("Помилка, некоректно введені дані!");
} else if (numberCandiesFirstChild > numberCandiesSecondChild) {
  document.write(`У ${firstChildName} кількість цукерок більша!`);
} else if (numberCandiesFirstChild < numberCandiesSecondChild) {
  document.write(`У ${secondChildName} кількість цукерок більша!`);
} else {
  document.write("Діти мають однакову кількість цукерок!");
}
