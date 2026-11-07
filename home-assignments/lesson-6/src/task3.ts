//    З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його.

if (confirm("Почати тестування?")) {
  const correctPassword = "78";
  let userPassword: string | null;

  for (let i = 0; i < 3; i++) {
    userPassword = prompt(`Введіть пароль?`)!;
    if (userPassword === correctPassword) {
      document.write(`<p>Пароль вірний!</p> `);
      break;
    } else document.write(`<p>Не вірний пароль!</p> `);
  }
}
