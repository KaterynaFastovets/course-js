// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const userAge = parseFloat(prompt("Введіть вік людини")!);
let personIs = "";

if (isNaN(userAge) || userAge < 3 || userAge > 110)
  throw new Error("Помилка, не відповідає числам 3 до 110");
else if (userAge < 6) personIs = "Дитина в садочку";
else if (userAge < 18) personIs = "Школяр";
else if (userAge < 23) personIs = "Студент";
else if (userAge < 60) personIs = "Працівник";
else personIs = "Пенсіонер";
document.write(personIs);


